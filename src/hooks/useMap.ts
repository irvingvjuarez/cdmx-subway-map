import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { transform } from "ol/proj";

import { MAPBOX_API } from "@app/constants"
import { apply, applyStyle } from "ol-mapbox-style"
import VectorTileLayer from "ol/layer/VectorTile";

const useMap = () => {
  const mapRef = useRef(null);
  const defaultLayer = new VectorTileLayer({ declutter: true })
  applyStyle(defaultLayer, 'https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=' + MAPBOX_API);

  const map = new Map({
    view: new View({
      center: transform([-99.1276600, 19.4284700], 'EPSG:4326', 'EPSG:3857'),
      zoom: 14
    }),
    layers: [ defaultLayer ]
  })
  // apply(map, 'https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=' + MAPBOX_API)

  useEffect(() => {
    map.setTarget(mapRef.current ?? undefined);
  }, []);

  return({
    map,
    mapRef
  })
}

export { useMap }