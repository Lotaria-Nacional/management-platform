import { Skeleton } from "@/components/ui/skeleton";

export default function PosTableSkeleton() {
  return (
    <div className="w-full rounded-table h-full">
      <Skeleton className="w-full h-full bg-GRAY-200/40" />
    </div>
  );
}
