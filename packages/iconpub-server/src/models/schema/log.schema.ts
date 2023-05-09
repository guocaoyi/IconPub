export class LogPo {
  id: number
}

/** active log */
export class ActiveLogPo extends LogPo {
  groupId: number

  content: string

  /**
   * type
   * @enum {0 | 1 | 2} 0:sign 1:icon action 2:action
   */
  type: 0 | 1 | 2

  operatorId: string

  operatorName: string

  createdAt: string

  updatedAt?: string

  deletedAt?: null
}

/** sign in */
export class SignLogPo extends LogPo {
  groupId: number

  content: string

  /**
   * type
   * @enum {0 | 1 | 2} 0:sign 1:icon action 2:action
   */
  type: 0 | 1 | 2

  operatorId: string

  operatorName: string

  createdAt: string

  updatedAt?: string

  deletedAt?: null
}
