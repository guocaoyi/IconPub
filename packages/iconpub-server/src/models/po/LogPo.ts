/**
 * 操作日志
 */
export class ActiveLogPo {
  id: number
  /** 项目编号 */
  groupId: number

  /** 内容 */
  content: string

  /**
   * type
   * @enum {0 | 1 | 2} 0:sign 1:icon action 2:action
   */
  type: 0 | 1 | 2

  /** 操作行为（Event）编号 */
  operatorId: string

  /** 操作行为（Event）名称 */
  operatorName: string

  /** 创建时间戳 */
  createdAt: string

  /** 更新时间戳 */
  updatedAt?: string

  /** 删除时间戳 */
  deletedAt?: null
}
