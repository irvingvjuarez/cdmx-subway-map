import { useMap } from "@app/hooks/useMap"
import { MapWrapperStyles, MapStyles, LayersSelectStyles } from "./styles"

const OlMap = () => {
  const { mapRef } = useMap();

  return(
    <MapWrapperStyles>
      <LayersSelectStyles name="layers" id="layers" defaultValue="light-v10">
        <option value="light-v10">Light</option>
        <option value="streets-v11">Streets</option>
        <option value="outdoors-v11">Outdoors</option>
        <option value="dark-v10">Dark</option>
        <option value="satellite-v9">Satellite</option>
        <option value="satellite-streets-v11">Satellite Streets</option>
        <option value="navigation-day-v1">Navigation Day</option>
        <option value="navigation-night-v1">Navigation Night</option>
      </LayersSelectStyles>
      <MapStyles ref={mapRef}></MapStyles>
    </MapWrapperStyles>
  )
}

export default OlMap;