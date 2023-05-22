/**
 * status of album
 */
export enum Status {
  /**
   * active
   */
  Actived = 'actived',

  /**
   * archived
   */
  Archived = 'archived',

  /**
   * delete
   */
  Deleted = 'deleted',
}

/** */
export const status = ['actived', 'archived', 'deleted']

/** */
export const action = ['active', 'archive', 'delete']
