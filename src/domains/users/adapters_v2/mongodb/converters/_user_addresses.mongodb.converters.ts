import { UserPostalAddressDal } from '../types/users.mongodb.types'
import { UserPostalAddress } from '../../../types/users.types'

export const userAddressFromDal = (
  input: UserPostalAddressDal
): UserPostalAddress => {
  const result: UserPostalAddress = {
    street: input.street,
    postCode: input.post_code
  }

  return result
}
