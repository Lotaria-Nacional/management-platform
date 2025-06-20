import { ICONS } from "@/assets";
import { PosEntity } from "../types";
import { MarkerF } from "@react-google-maps/api";

type GoogleMapMarkerIcon = google.maps.Icon;

type Props = {
  pos: PosEntity;
};

export default function PosMapMarker({ pos }: Props) {
  const marker: GoogleMapMarkerIcon = {
    url: ICONS.markerMapLotaria,
    anchor: new google.maps.Point(5, 10),
    scaledSize: new google.maps.Size(28, 28),
  };

  return (
    <MarkerF icon={marker} position={{ lat: pos.latitude, lng: pos.longitude }}>
      <div>{pos.id}</div>
    </MarkerF>
  );
}
