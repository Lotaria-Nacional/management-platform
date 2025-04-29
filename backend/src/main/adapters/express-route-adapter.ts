import { Request, RequestHandler, Response } from "express";
import { HttpRequest, IController } from "@/core/presentation/http";

export function expressRouteAdapter(controller: IController):RequestHandler {
  return async (req: Request, res: Response): Promise<void> => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      file: (req as any).file,
    };

    const httpResponse = await controller.handle(httpRequest);

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
}