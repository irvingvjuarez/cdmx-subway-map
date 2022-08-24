import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const useMap = () => {
  const mapRef = useRef(null);
  let map

  useEffect(() => {
    map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1
      }),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: mapRef.current ?? undefined
    })
  }, []);

  return({
    map,
    mapRef
  })
}

export { useMap }