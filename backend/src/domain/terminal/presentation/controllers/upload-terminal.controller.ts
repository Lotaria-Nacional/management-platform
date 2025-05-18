import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { UploadTerminalsUseCase } from "../../application/use-cases/upload-terminal.useCase"

export class UploadTerminalController implements IController {
  constructor(private useCase: UploadTerminalsUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    const file = (request as any).file

    if (!file?.buffer) {
      return {
        statusCode: 400,
        body: { message: "Valid file buffer is required" },
      }
    }

    try {
      const { terminals } = await this.useCase.execute({ buffer: file.buffer })

      return {
        statusCode: 201,
        body: { message: "Terminals uploaded successfully", terminals },
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: {
          message: "Internal server error",
          error: error.message || error,
        },
      }
    }
  }
}
