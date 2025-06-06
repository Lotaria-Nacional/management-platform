import { Skeleton } from "@/components/ui/skeleton";

export default function LicenceTableSkeleton() {
  const length = 10;
  return (
    <div className="flex flex-col gap-4 w-full">
      <Skeleton className="w-full bg-GRAY-150 h-10" />
      {Array.from({ length }).map((_, i) => (
        <Skeleton key={i} className="bg-GRAY-150 w-full text-center h-10" />
      ))}
    </div>
  );
}
