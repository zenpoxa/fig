// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { BlendMode } from "../BlendMode";
import type { Color } from "../color/Color";
import type { ColorStop } from "../ColorStop";
import type { ImageFilters } from "../ImageFilters";
import type { PaintScaleMode } from "./PaintScaleMode";
import type { PaintType } from "./PaintType";
import type { Transform } from "../Transform";
import type { VariableAlias } from "../VariableAlias";
import type { Vector } from "../Vector";

/**
 * A solid color, gradient, or image texture that can be applied as fills or strokes
 */
export type Paint = { 
/**
 * Type of paint as a string enum
 * SOLID
 * GRADIENT_LINEAR
 * GRADIENT_RADIAL
 * GRADIENT_ANGULAR
 * GRADIENT_DIAMOND
 * IMAGE
 * EMOJI
 * VIDEO
 */
paintType: PaintType, 
/**
 * Is the paint enabled?
 */
visible: boolean, 
/**
 * default : true
 * Overall opacity of paint (colors within the paint can also have opacity values which would
 * blend with this)
 */
opacity: number, 
/**
 * default : true
 * For solid paints :
 * Solid color of the paint
 */
color: Color, 
/**
 * For gradient paints :
 * How this node blends with nodes behind it in the scene (see blend mode section for more
 * details)
 */
blendMode: BlendMode, 
/**
 * This field contains three vectors, each of which are a position in normalized object space
 * (normalized object space is if the top left corner of the bounding box of the object is (0,
 * 0) and the bottom right is (1,1)). The first position corresponds to the start of the
 * gradient (value 0 for the purposes of calculating gradient stops), the second position is
 * the end of the gradient (value 1), and the third handle position determines the width of
 * the gradient. See image examples below :
 */
gradientHandlePositions: Array<Vector>, 
/**
 * Positions of key points along the gradient axis with the colors anchored there. Colors
 * along the gradient are interpolated smoothly between neighboring gradient stops.
 */
gradientStops: Array<ColorStop>, 
/**
 * For image paints :
 * Image scaling mode
 * FILL
 * FIT
 * TILE
 * STRETCH
 */
scaleMode: PaintScaleMode, 
/**
 * Affine transform applied to the image, only present if scaleMode is STRETCH
 */
imageTransform: Transform, 
/**
 * Amount image is scaled by in tiling, only present if scaleMode is TILE
 */
scalingFactor: number, 
/**
 * Image rotation, in degrees.
 */
rotation: number, 
/**
 * A reference to an image embedded in this node. To download the image using this reference,
 * use the GET file images endpoint to retrieve the mapping from image references to image
 * URLs
 */
imageRef: string, 
/**
 * Defines what image filters have been applied to this paint, if any. If this property is not
 * defined, no filters have been applied.
 */
filters: ImageFilters, 
/**
 * default : {}
 * A reference to the GIF embedded in this node, if the image is a GIF. To download the image
 * using this reference, use the GET file images endpoint to retrieve the mapping from image
 * references to image URLs
 */
gifRef: string, 
/**
 * A mapping of field to the VariableAlias of the bound variable.
 */
boundVariables: { [key in string]?: VariableAlias }, };
