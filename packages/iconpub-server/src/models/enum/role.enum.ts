/**
 * role of user in album
 */
export enum Role {
  /**
   * platform admin, can take any action of any album
   */
  Admin = 'admin',

  /**
   * owner, can take any action
   */
  Owner = 'owner',

  /**
   * contributor, any action except archive & delete
   * for album
   */
  Contributor = 'contributor',
}
