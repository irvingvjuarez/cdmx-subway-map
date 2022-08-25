import { useMap } from "@app/hooks/useMap"
import { useEffect } from "react"
import styled from 'styled-components'
import proj4 from "proj4"

// todo: register not imported from ol/proj
import { get as getProjection, register } from "ol/proj"
import { View } from "ol"

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
`

const OlMap = () => {
  const { mapRef, map } = useMap()

  useEffect(() => {
    proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 ' +
      '+x_0=400000 +y_0=-100000 +ellps=airy ' +
      '+towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 ' +
      '+units=m +no_defs'
    );
    register(proj4);
    const proj27700 = getProjection('EPSG:27700');
    proj27700?.setExtent([0, 0, 700000, 1300000])

    map.setView(new View({
      projection: 'EPSG:27700',
      center: [400000, 6500000],
      zoom: 4
    }))
  }, [])

  return(
    <MapStyles ref={mapRef}></MapStyles>
  )
}

export default OlMap;