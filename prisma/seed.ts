import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

const createUser = (email: string, name: string) =>
  prismaClient.users
    .upsert({
      where: { email },
      update: {},
      create: { email, name },
    })
    .then(() => console.log(`Created user ${name} with email ${email}`))

async function main() {
  await createUser('chevalierxavier38@gmail.com', 'Xavier Chevalier')
  await createUser('kutoros@gmail.com', 'Nicolas Chevalier')
  await createUser('labeilleviennoise@gmail.com', "L'abeille Viennoise")
}

main()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })
