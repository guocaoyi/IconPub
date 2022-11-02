import { ApiProperty } from '@nestjs/swagger'

/**
 * response
 * @author yalda
 */
export class Response<T> {
  /**
   * response status
   */
  status: 0 | 1 | 2 | 3 | 4 | 5

  /**
   * response data
   */
  @ApiProperty({ name: 'Response data' })
  data: T

  /**
   * response code
   */
  @ApiProperty({ name: 'Response code' })
  code: number

  /**
   * response message
   */
  @ApiProperty({ name: 'Response message' })
  message: string
}
