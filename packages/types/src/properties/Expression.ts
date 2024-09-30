// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ExpressionFunction } from "./ExpressionFunction";
import type { VariableData } from "./VariableData";

/**
 * Defines the Expression object, which contains a list of VariableData objects strung together by operators (VariableData).
 */
export type Expression = { expressionFunction: ExpressionFunction, expressionArguments: Array<VariableData>, };