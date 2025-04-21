import React from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
}

const center = {
  lat: -8.81517733658599,
  lng: 13.22662866912247,
}

const GOOGLE_MAPS_API_KEY = "AIzaSyBbOx73dSzlfU6vBUY_6CrtkGgLpvszF9Y"

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  })

  const [_map, setMap] = React.useState<google.maps.Map | null>(null)

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(_map: google.maps.Map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      zoom={8}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapContainerStyle={containerStyle}
    >
      GoogleMap
    </GoogleMap>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <span>Carregando...</span>
    </div>
  )
}

export default Map
