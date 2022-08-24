import { useMap } from "../../hooks/useMap"

const OlMap = () => {
  const { mapRef } = useMap()

  return(
    <div className="map-container" ref={mapRef}></div>
  )
}

export default OlMap;