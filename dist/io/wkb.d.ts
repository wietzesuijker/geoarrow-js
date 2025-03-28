import { GeoArrowData, WKBData } from "../data";
export declare enum WKBType {
    Point = 0,
    LineString = 1,
    Polygon = 2,
    MultiPoint = 3,
    MultiLineString = 4,
    MultiPolygon = 5
}
/**
 * Parse an Arrow array of WKB
 *
 * @return  {[type]}  [return description]
 */
export declare function parseWkb(data: WKBData, type: WKBType, dim: number): GeoArrowData;
