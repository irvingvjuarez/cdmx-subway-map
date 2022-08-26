import { useMap } from "@app/hooks/useMap"
import styled from 'styled-components'
import { MAPBOX_API } from "@app/constants"
import { useEffect } from "react"
import { apply } from "ol-mapbox-style"

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
`

const OlMap = () => {
  const { mapRef, map } = useMap()
  
  useEffect(() => {
    apply(map, 'https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=' + MAPBOX_API)
  }, [])

  return(
    <MapStyles ref={mapRef}></MapStyles>
  )
}

export default OlMap;