import type { users } from 'prisma-client'
import { PrismaClient } from 'prisma-client'

export interface User extends users {}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const prismaClient = new PrismaClient()
  await prismaClient.$connect()
  const user = await prismaClient.users.findFirst({ where: { email } })
  await prismaClient.$disconnect()

  return user
}

export interface CreateUserOptions {
  email: string
  name: string
}
export const createOrUpdateUser = async ({
  email,
  name,
}: CreateUserOptions): Promise<void> => {
  const prismaClient = new PrismaClient()
  await prismaClient.$connect()
  await prismaClient.users.upsert({
    where: { email },
    update: {},
    create: { email, name },
  })
  await prismaClient.$disconnect()
}
