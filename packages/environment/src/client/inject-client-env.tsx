import { getClientEnv } from '@/client/index'

export const InjectClientEnv = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window._ENV = ${JSON.stringify(getClientEnv())}`,
    }}
  />
)
