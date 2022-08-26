import { useMap } from "@app/hooks/useMap"
import styled from 'styled-components'
import { ARC_GIS_API } from "@app/constants"

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
`

const OlMap = () => {
  const { mapRef } = useMap()
  console.log({
    ARC_GIS_API
  })

  return(
    <MapStyles ref={mapRef}></MapStyles>
  )
}

export default OlMap;