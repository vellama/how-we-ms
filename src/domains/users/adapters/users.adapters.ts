import { UserDal } from '../dal/users.dal.types';
import { User } from '../types/users.types';
import { userAddressFromDal } from './_user_addresses.adapters';

export const userFromDal = (input: UserDal): User => {
  const result: User = {
    id: input._id,
    firstname: input.first_name,
    gender: input.gender,
  };

  if (input.last_name) result.lastname = input.last_name;
  if (input.addresses)
    result.postalAddresses = input.addresses.map((address) =>
      userAddressFromDal(address),
    );

  return result;
};
