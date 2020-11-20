import { UserGender } from '../enums/users.enum'
import { UserDal } from './users.dal.types'

export const getOneUserById = (id: string): UserDal => {
  return {
    _id: 'userId1',
    first_name: 'toto',
    gender: UserGender.Female,
    addresses: [
      {
        street: 'street1',
        post_code: 'post_code_1'
      }
    ]
  }
}
