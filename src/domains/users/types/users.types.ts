import { UserGender } from '../enums/users.enum'

export interface UserPostalAddress {
  street: string
  postCode: string
}

export interface User {
  id: string
  firstname: string
  lastname?: string
  gender: UserGender
  postalAddresses?: UserPostalAddress[]
}
