import { useMap } from "@app/hooks/useMap"
import styled from 'styled-components'

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
`

const OlMap = () => {
  const { mapRef } = useMap()

  return(
    <MapStyles ref={mapRef}></MapStyles>
  )
}

export default OlMap;