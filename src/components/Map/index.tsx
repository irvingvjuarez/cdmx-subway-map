import { useMap } from "@app/hooks/useMap"
import { useEffect } from "react"
import styled from 'styled-components'

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
`

const OlMap = () => {
  const { mapRef, map } = useMap()

  useEffect(() => {
    console.log({
      map
    })
  }, [])

  return(
    <MapStyles ref={mapRef}></MapStyles>
  )
}

export default OlMap;