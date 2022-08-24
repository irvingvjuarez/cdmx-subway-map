import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const OlMap = () => {
  const mapRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const map = new Map({
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
  }, [])

  return(
    <div className="map-container" ref={mapRef}></div>
  )
}

export default OlMap;