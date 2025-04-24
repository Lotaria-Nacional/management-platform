import { Request, Response } from "express";

type ExpressController = {
    handle: (req:Request,res:Response)=> void
}

export function adaptExpressRoute(controller:ExpressController){
    return (req:Request, res:Response)=> controller.handle(req, res)
}