import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TANSTACK_KEY } from "@/app/constants/tanstack-keys";

type Bounds = {
  north: number;
  south: number;
  east: number;
  west: number;
};

export function useFetchPosByBounds(bounds?: Bounds) {
  return useQuery({
    queryKey: [TANSTACK_KEY.pos.fetch_by_bounds, bounds],
    queryFn: async () => {
      if (!bounds) return [];

      const params = new URLSearchParams({
        north: String(bounds.north),
        south: String(bounds.south),
        east: String(bounds.east),
        west: String(bounds.west),
      });

      const res = await axios.get("/pos/within-bounds?" + params.toString());
      return res.data; // array de POS
    },
    enabled: !!bounds, // só ativa quando bounds estiver disponível
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });
}
