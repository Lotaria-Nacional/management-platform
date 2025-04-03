import Map from "@/shared/components/google-map";
import { Card } from "@/shared/components/ui/card";

type Props = {};

function SalesPointMap({}: Props) {
  return (
    <Card className="h-[344px] lg:h-full p-0">
      <Map />
    </Card>
  );
}

export default SalesPointMap;
