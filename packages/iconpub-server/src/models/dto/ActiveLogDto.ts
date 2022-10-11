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

  /** 项目编号 */
  groupID: number

  /** 内容 */
  content: string

  /** type */
  type: 0 | 1 | 2

  /** 操作行为（Event）编号 */
  operatorID: string

  /** 操作行为（Event）名称 */
  operatorName: string

  /** 创建时间戳 */
  createdAt: string
  /** 更新时间戳 */
  updatedAt?: string
  /** 删除时间戳 */
  deletedAt?: null

  /** JSON 字段 */
  event?: string
}
