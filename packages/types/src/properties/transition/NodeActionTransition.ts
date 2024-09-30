// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DirectionalTransition } from "./DirectionalTransition";
import type { SimpleTransition } from "./SimpleTransition";

/**
 * Enum describing the transition of a node action
 */
export type NodeActionTransition = { "SimpleTransition": SimpleTransition } | { "DirectionalTransition": DirectionalTransition } | "Null";