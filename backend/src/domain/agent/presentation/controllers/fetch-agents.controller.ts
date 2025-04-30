import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { FetchAgentsUseCase } from "../../application/use-cases/fetch-agents.useCase";

export class FetchAgentsController implements IController {
  constructor(private fetchAgentsUseCase: FetchAgentsUseCase) {}

  async handle(_req: HttpRequest): Promise<HttpResponse> {

    try {
      const { agents } = await this.fetchAgentsUseCase.execute();
      return {
        statusCode: 200,
        body:  agents,
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
