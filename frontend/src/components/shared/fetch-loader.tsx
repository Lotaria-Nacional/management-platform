import { COLORS } from "@/app/constants/colors";
import Loading from "./loading";

export default function FetchLoader() {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <Loading size={6} color={COLORS.RED[600]} />
    </div>
  );
}
