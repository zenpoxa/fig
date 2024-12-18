<script lang="ts" module>
  import type {Snippet} from "svelte";
  import type {HTMLInputAttributes} from "svelte/elements";
  import type {WithElementRef} from "bits-ui";
  import type {InputProps} from "$lib/components/ui/input/input.svelte";

  export const partStyle = "cursor-col-resize";

  export type NumberInputProps = InputProps & {
    left?: Snippet;
    right?: Snippet;
  }
</script>

<script lang="ts">
  import {Input} from "$lib/components/ui/input";

  let {
    ref = $bindable(undefined),
    class: className,
    value = $bindable(0),
    left: leftPart,
    right: rightPart,
    min,
    max,
    ...restProps
  }: NumberInputProps = $props();

  let canUpdateValue = $state(false);

  function horizontalDrag(node: HTMLButtonElement) {
    let direction = 0;

    node.addEventListener("mousedown", () => canUpdateValue = true);

    window.addEventListener("mousemove", (e) => {
      if (canUpdateValue) {
        window.document.body.requestPointerLock();

        direction = Math.sign(e.movementX);

        if (direction !== 0) {
          if (max && direction > 0 && value + direction <= max) {
            value += direction;
          } else if (!max && min && direction > 0) {
            value += direction;
          }

          if (min && direction < 0 && value + direction >= min) {
            value += direction;
          } else if (!min && max && direction < 0) {
            value += direction;
          }

          if (!min && !max) {
            value += direction;
          }
        }
      }
    })

    window.addEventListener("mouseup", () => {
      canUpdateValue = false;
      window.document.exitPointerLock();
    });
  }

  $effect(() => {
    if (min) {
      if (value < min) {
        value = min;
      }
    }
    if (max) {
      if (value > max) {
        value = max;
      }
    }
  })

</script>

<Input type="text" bind:value={value} class={className} selectOnFocus
       {...restProps}>
  {#snippet left()}
    {#if (leftPart)}
      <button use:horizontalDrag class={partStyle}>
        {@render leftPart()}
      </button>
    {/if}
  {/snippet}

  {#snippet right()}
    {#if (rightPart)}
      <button use:horizontalDrag class={partStyle}>
        {@render rightPart()}
      </button>
    {/if}
  {/snippet}
</Input>
