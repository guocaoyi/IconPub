/**
 * visit enum
 */
export enum Visibility {
  /**
   * private: just for owner & contributors
   */
  Private = 'private',

  /**
   * protected: for owner and contributors | org members(read-only)
   */
  Protected = 'protected',

  /**
   * public: for all platform user(read-only)
   */
  Public = 'public',
}

export const visibility = ['private', 'protected', 'public']
