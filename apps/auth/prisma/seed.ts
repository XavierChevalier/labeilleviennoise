import type { CreateUserOptions } from '@labeilleviennoise/auth-server'
import { createOrUpdateUser } from '@labeilleviennoise/auth-server'

const createUser = (user: CreateUserOptions) =>
  createOrUpdateUser(user).then(() =>
    console.log(`Created user ${user.name} with email ${user.email}`)
  )

async function main() {
  await createUser({
    email: 'chevalierxavier38@gmail.com',
    name: 'Xavier Chevalier',
  })
  await createUser({ email: 'kutoros@gmail.com', name: 'Nicolas Chevalier' })
  await createUser({
    email: 'labeilleviennoise@gmail.com',
    name: "L'abeille Viennoise",
  })
}

main().catch(async (e) => {
  console.error(e)
  process.exit(1)
})
