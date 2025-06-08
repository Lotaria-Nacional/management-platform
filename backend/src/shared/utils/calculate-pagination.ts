import { PaginationParams } from "@/core/types/params"

interface IPaginatedRepository<T> {
  fetchMany(params: { page: number; limit: number }): Promise<T[]>
  countAll(): Promise<number>
}

interface PaginationResult<T> {
  data: T[]
  total: number
  totalPages: number
}

export async function calculatePagination<T>(
  repository: IPaginatedRepository<T>,
  { page = 1, limit = 10 }: PaginationParams
): Promise<PaginationResult<T>> {
  const offset = Math.max(0, (page - 1) * limit)

  const [data, total] = await Promise.all([
    repository.fetchMany({ page: offset, limit }),
    repository.countAll(),
  ])

  const totalPages = Math.ceil(total / limit)

  return { data, total, totalPages }
}
