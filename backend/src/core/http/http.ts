export interface HttpRequest<T> {
  body?: T
  params?: any
  query?: any
  file?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}

export interface IController<T = any> {
  handle(request: HttpRequest<T>): Promise<HttpResponse>
}
