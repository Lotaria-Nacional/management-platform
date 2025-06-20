import { GoogleMapProps } from "@react-google-maps/api";

export const googleMapConfig:GoogleMapProps = {
    mapContainerStyle:{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
    },
    center: {
        lat: -8.813738141607196,
        lng: 13.229724270313715,
      }, 
    options:{
        zoom:12,
        minZoom:2,
        maxZoom:20,
        styles:[
            {
                featureType:"all",
                elementType:"labels",
                stylers:[{visibility:"on"}]
            },
            {
                featureType:"poi",
                stylers:[{visibility:"off"}]
            },
            {
                featureType:"administrative",
                stylers:[{visibility:"on"}]
            },
        ],
        disableDefaultUI:true
    }
  };