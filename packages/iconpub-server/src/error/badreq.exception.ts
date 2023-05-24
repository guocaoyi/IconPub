import { Catch, ExceptionFilter, Logger } from '@nestjs/common'

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger(BadRequestExceptionFilter)

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    const status =
      exception instanceof BadRequestException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

    const message = {
      Title: exception.message.error,
      Type: 'Exception - BadRequestExceptionFilter',
      Detail: exception.message,
      Status: '',
    }

    this.logger.error(message, '')
    response.code(status).send({
      statusCode: status,
      ...(exception.getResponse() as object),
      timestamp: 'Exception - BadRequestException' + new Date().toISOString(),
    })
  }
}
