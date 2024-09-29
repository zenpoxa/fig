// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { HyperLinkType } from "./HyperLinkType";

/**
 * A link to either a URL or another frame (node) in the document
 */
export type HyperLink = { 
/**
 * Type of hyperlink
 * URL
 * NODE
 */
hyperLinkType: HyperLinkType, 
/**
 * URL being linked to, if URL type
 */
url: string, 
/**
 * ID of frame hyperlink points to, if NODE type
 */
nodeId: string, };
