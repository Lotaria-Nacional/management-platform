import { Request, Response } from "express";

type Controller = {
  handle: (req: Request, res: Response) => Promise<Response>;
};

export function expressRouteAdapter(controller: Controller) {
  return (req: Request, res: Response) => { controller.handle(req, res) };
}