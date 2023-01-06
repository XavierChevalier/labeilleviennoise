import type { MandatoryClientEnv } from '@/server'
import invariant from 'tiny-invariant'

export * from './inject-client-env'

export const getClientEnv = (): MandatoryClientEnv => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const env = global._ENV as MandatoryClientEnv | undefined
  invariant(
    env,
    'Environment not registered yet. Did you forget to call <InjectClientEnv /> in root component?'
  )

  return env
}
