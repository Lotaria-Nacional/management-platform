export interface IFetchDataResponse<T> {
    data: Array<{ id: string } & T>
    total: number
    totalPages: number
  }
  