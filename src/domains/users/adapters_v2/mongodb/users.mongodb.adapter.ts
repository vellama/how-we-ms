import { User } from 'domains/users/types/users.types'
import { userFromDal } from './converters/users.mongodb.converter'
import { getOneUserById as getOneByUserIdDal } from './dal/users.mongodb.dal'

export const getOneByUserId = (userId: string): User => {
  return userFromDal(getOneByUserIdDal(userId))
}
