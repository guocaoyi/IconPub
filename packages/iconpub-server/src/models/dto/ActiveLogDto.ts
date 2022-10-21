export class LogPo {
  /**
   * log type
   * @enum {0 | 1 | 2 | 3} 0:signin 1:active 2:danger 3:reback
   * @descriptiono_zh 日志类型 0：登录 1：操作 3：危险 4：回滚
   */
  type: 0 | 1 | 2 | 3
}

export class SignLogPo {
  ip: string
}

/**
 * ActiveLog Dto
 * @description log for active
 * @description_zh 操作日志
 */
export class ActiveLogDto {
  id: number

  groupId: number

  content: string

  type: 0 | 1 | 2

  operatorId: string

  operatorName: string

  event?: string

  createdAt: string
  updatedAt?: string
  deletedAt?: null
}
