import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query"
import { useEffect } from "react"

// Define um tipo genérico reutilizável para a resposta da API paginada
type PaginatedResponse<T> = {
  data: T[]
  total: number
  totalPages: number
  currentPage: number
}

// Props tipadas para o hook
type UseFetchInfiniteDataProps<T> = {
  inView: boolean
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<PaginatedResponse<T>>, Error>
  >
}

/**
 * Hook que executa `fetchNextPage` automaticamente quando o elemento entra na tela.
 * Ideal para infinite scrolling.
 */
export function useFetchInfiniteData<T>({
  inView,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseFetchInfiniteDataProps<T>): void {
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage().catch((err) => {
        // Log de erro para debug. Pode ser substituído por monitoramento ou toast.
        console.error("Erro ao buscar próxima página:", err)
      })
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])
}
