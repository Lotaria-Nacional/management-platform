import PosMapMarker from "./pos-map-marker";
import { Card } from "@/components/ui/card";
import Loading from "@/components/shared/loading";
import { GoogleMap } from "@react-google-maps/api";
import { googleMapConfig } from "@/features/google-map/config";
import { useFetchInfinitePos } from "../hooks/use-fetch-infinite-pos";
import { useGoogleMaps } from "@/features/google-map/hooks/use-google-map";

function PosMap() {
  const { isLoaded, onLoad, onUnmount } = useGoogleMaps();
  const { data: pos } = useFetchInfinitePos();

  const flattenedPos = pos?.pages.flatMap((p) => p.data);

  return (
    <Card className="h-[344px] lg:h-full p-0">
      <div className="w-full h-full flex items-center justify-center">
        {isLoaded ? (
          <GoogleMap
            onLoad={onLoad}
            onUnmount={onUnmount}
            center={googleMapConfig.center}
            options={googleMapConfig.options}
            mapContainerStyle={googleMapConfig.mapContainerStyle}
          >
            {flattenedPos?.map((p, i) => (
              <PosMapMarker key={i} pos={p} />
            ))}
          </GoogleMap>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Loading className="size-16" />
          </div>
        )}
      </div>
    </Card>
  );
}

export default PosMap;
