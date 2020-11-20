import { User } from '../types/users.types'
import { getOneByUserId as getOneByUserIdWithMongoDb } from './mongodb/users.mongodb.adapter'
import { Provider } from './types/adapters.types'

export const getOneByUserId = (userId: string, provider: Provider): User => {
  switch (provider) {
    case Provider.Mongo_Db:
      return getOneByUserIdWithMongoDb(userId)
    default:
      return getOneByUserIdWithMongoDb(userId)
  }
}
