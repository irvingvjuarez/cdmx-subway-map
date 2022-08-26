export const ARC_GIS_API = import.meta.env.VITE_ARC_GIS_API;
export const MAPBOX_API = import.meta.env.VITE_MAPBOX_TOKEN;
export const BASE_MAP_ID = "ArcGIS:Streets";
export const BASE_MAP_URL = "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/" + BASE_MAP_ID + "?type=style&token=" + ARC_GIS_API;