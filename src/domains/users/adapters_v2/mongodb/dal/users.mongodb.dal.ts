import { ObjectId } from 'mongodb'
import { UserGender } from '../../../enums/users.enum'
import { UserDal } from '../types/users.mongodb.types'

export const getOneUserById = (id: string): UserDal => {
  return {
    _id: new ObjectId(),
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
