import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { UploadAgentUseCase } from "../../application/use-cases/upload-agent.useCase";

export class UploadAgentsController implements IController {
  constructor(private uploadAgentUseCase: UploadAgentUseCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const file = (req as any).file;

    if (!file?.buffer) {
      return {
        statusCode: 400,
        body: { message: "Valid file buffer is required" },
      };
    }

    try {
      const result = await this.uploadAgentUseCase.execute({ buffer: file.buffer });
      return {
        statusCode: 201,
        body:  result ,
      };
      
    } catch (error: any) {
      console.error("[UploadAgentsController]", error);
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
