/**
 * action of user in album
 */
export enum Action {
  /**
   * includes all actions, just for platform admin
   */
  Manage = 'manage',

  /**
   * read-only
   */
  Visit = 'visit',

  /**
   * fork item to another album, or fork album
   */
  Fork = 'fork',

  /**
   * create new item
   */
  Create = 'create',

  /**
   * update item, album info
   */
  Update = 'update',

  /**
   * archive item, album
   */
  Archive = 'archive',

  /**
   * delete item, album
   */
  Delete = 'delete',
}
