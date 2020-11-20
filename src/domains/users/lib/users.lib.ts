import { User } from '../types/users.types'

import { getOneUserById as getOneByUserIdDal } from '../dal/users.dal'
import { userFromDal } from '../adapters/users.adapters'
import { isMale } from '../helpers/users.helpers'

export const getOneByUserId = (userId: string): User => {
  return userFromDal(getOneByUserIdDal(userId))
}

export const checkUserIsMaleByUserId = (userId: string): boolean => {
  const user = getOneByUserId(userId)
  return isMale(user)
}
