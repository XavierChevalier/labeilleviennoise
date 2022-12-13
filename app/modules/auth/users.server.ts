import type { users } from '@prisma/client'
import { prismaClient } from '@/modules/shared/prisma-client.server'

export interface User extends users {}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  await prismaClient.$connect()
  const user = await prismaClient.users.findFirst({ where: { email } })
  await prismaClient.$disconnect()

  return user
}
