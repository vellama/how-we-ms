import { UserGender } from '../enums/users.enum'
import { User } from '../types/users.types'

export const isMale = (user: User): boolean => {
  return user.gender === UserGender.Male
}
