import { ApiProperty } from '@nestjs/swagger'

/**
 * response
 * @author yalda
 */
export class Response<T> {
  /**
   * @description_zh 请求状态
   */
  status: 0 | 1 | 2 | 3 | 4 | 5

  /**
   * Response data
   * @description_zh 返回体
   */
  @ApiProperty({ name: 'Response data' })
  data: T

  /**
   * Response code
   * @description_zh 返回体
   */
  @ApiProperty({ name: 'Response code' })
  code: number

  /**
   * response message
   * @description_zh 返回信息
   */
  @ApiProperty({ name: 'Response message' })
  message: string
}
