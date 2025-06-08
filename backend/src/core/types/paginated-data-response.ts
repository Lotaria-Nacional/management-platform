export type TPaginatedDataResponseDTO<T> = {
  data: Array<{ id: string } & T>
  total: number
  totalPages: number
}
