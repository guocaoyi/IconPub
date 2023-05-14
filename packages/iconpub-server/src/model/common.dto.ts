import { ApiProperty } from '@nestjs/swagger'

/**
 * response
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

/**
 * request
 */
export class Request {
  pageNum: number
  pageSize: number
}

/**
 * paginated
 */
export class PaginatedDto<TData> {
  @ApiProperty()
  total: number

  @ApiProperty()
  limit: number

  @ApiProperty()
  offset: number

  data: TData[]
}
