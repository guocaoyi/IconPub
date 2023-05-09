/**
 * unread count
 */
export class UnreadCountPo {
  chatsCount: number

  collectionReview: number

  comment: number

  notice: number

  official: number

  officialNotice: number

  totalcount: number
}

export class MessagePo {
  id: number

  unread: UnreadCountPo
}
