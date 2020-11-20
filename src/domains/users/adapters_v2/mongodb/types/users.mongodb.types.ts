import { ObjectId } from 'mongodb'

import { UserGender } from '../../../enums/users.enum'

export interface UserPostalAddressDal {
  street: string
  post_code: string
}

export interface UserDal {
  _id: ObjectId
  first_name: string
  last_name?: string
  gender: UserGender
  addresses: UserPostalAddressDal[]
}
