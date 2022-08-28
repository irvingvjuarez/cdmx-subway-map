import { useMap } from "@app/hooks/useMap"
import { MAP_LAYERS_ENUM } from "@app/types/enums/map-layers.enum";
import { useState } from "react";
import { MapWrapperStyles, MapStyles, LayersSelectStyles } from "./styles"

const { 
  light, streets, outdoors,
  dark, satellite, satellite_streets,
  navigation_day, navigation_night 
} = MAP_LAYERS_ENUM

const OlMap = () => {
  const [mapLayer, setMapLayer] = useState<MAP_LAYERS_ENUM>(light)
  const { mapRef } = useMap(mapLayer);

  return(
    <MapWrapperStyles>
      <LayersSelectStyles name="layers" id="layers" defaultValue="light-v10">
        <option value={light}>Light</option>
        <option value={streets}>Streets</option>
        <option value={outdoors}>Outdoors</option>
        <option value={dark}>Dark</option>
        <option value={satellite}>Satellite</option>
        <option value={satellite_streets}>Satellite Streets</option>
        <option value={navigation_day}>Navigation Day</option>
        <option value={navigation_night}>Navigation Night</option>
      </LayersSelectStyles>
      <MapStyles ref={mapRef}></MapStyles>
    </MapWrapperStyles>
  )
}

export default OlMap;