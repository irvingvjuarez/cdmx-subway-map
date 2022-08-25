import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { transform } from "ol/proj";
import OSM from "ol/source/OSM";

const useMap = () => {
  const mapRef = useRef(null);
  const map = new Map({
    view: new View({
      center: transform([-99.1276600, 19.4284700], 'EPSG:4326', 'EPSG:3857'),
      zoom: 14
    }),
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ]
  })

  useEffect(() => {
    map.setTarget(mapRef.current ?? undefined);
  }, []);

  return({
    map,
    mapRef
  })
}

export { useMap }