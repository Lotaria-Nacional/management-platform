import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { FetchAgentsUseCase } from "../../../application/use-cases/agent/fetch-agents.useCase";

export class FetchAgentsController implements IController<any> {
  constructor(private fetchAgentsUseCase: FetchAgentsUseCase) {}

  async handle(req: HttpRequest<any>): Promise<HttpResponse> {

    try {
      const page = req.query?.page ? parseInt(req.query.page) : undefined;
      const limit = req.query?.limit ? parseInt(req.query.limit) : undefined;

      const result = await this.fetchAgentsUseCase.execute({ page, limit });
      
      return {
        statusCode: 200,
        body:  result,
      };
      
    } catch (error: any) {
      console.error("[FetchAgentsController]", error);
      return {
        statusCode: 500,
        body: {
          message: "Internal server error",
          error: error?.message || error,
        },
      };
    }
  }
}
