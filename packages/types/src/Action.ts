// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ConditionalAction } from "./ConditionalAction";
import type { NodeAction } from "./NodeAction";
import type { OpenURLAction } from "./OpenURLAction";
import type { SetVariableAction } from "./SetVariableAction";
import type { SetVariableModeAction } from "./SetVariableModeAction";
import type { UpdateMediaRuntimeAction } from "./UpdateMediaRuntimeAction";

/**
 * An action that is performed when a trigger is activated.
 */
export type Action = "BackAction" | "CloseAction" | { "OpenURLAction": OpenURLAction } | { "UpdateMediaRuntimeAction": UpdateMediaRuntimeAction } | { "SetVariableAction": SetVariableAction } | { "SetVariableModeAction": SetVariableModeAction } | { "ConditionalAction": ConditionalAction } | { "NodeAction": NodeAction };
