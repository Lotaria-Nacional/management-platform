import { useState,  useCallback } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

export type UseGoogleMapsReturn = {
    isLoaded:boolean
    map:google.maps.Map | null
    selectedMarker: number | null 
    onLoad:(map:google.maps.Map)=> void
    onUnmount:(map:google.maps.Map)=> void
    setSelectedMarker:React.Dispatch<React.SetStateAction<number | null>>
}

export const GOOGLE_CREDENTIALS = {
    id: import.meta.env.VITE_APP_API_GOOGLE_MAP_ID,
    googleMapsApiKey: "AIzaSyAcVKroYLAPwO1CFVBLMYFL3QkedQLNhc8",
    // googleMapsApiKey: import.meta.env.VITE_APP_API_GOOGLE_MAP_API,
  }

export function useGoogleMaps():UseGoogleMapsReturn{
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const { isLoaded } = useJsApiLoader(GOOGLE_CREDENTIALS);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback((_map: google.maps.Map) => {
    setMap(null);
  }, []);

  return { isLoaded,map,onLoad,onUnmount,selectedMarker,setSelectedMarker }
}