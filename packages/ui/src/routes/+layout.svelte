<script lang="ts">
  import '../app.css';
  import {TooltipProvider} from "$lib/components/ui/tooltip";

  let {children} = $props();
</script>

<TooltipProvider delayDuration={300} side="bottom">
  {@render children()}
</TooltipProvider>
