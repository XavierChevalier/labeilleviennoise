import { getClientEnv } from '@labeilleviennoise/environment/dist/client'

export type Tenant = 'website' | 'blog' | 'auth'

export const isSameDestinationAsCurrentWebsite = (
  destination: Tenant
): boolean => {
  const { BASE_URL_AUTH, BASE_URL_WEBSITE, BASE_URL_BLOG, CURRENT_BASE_URL } =
    getClientEnv()

  return (
    (CURRENT_BASE_URL === BASE_URL_WEBSITE && destination === 'website') ||
    (CURRENT_BASE_URL === BASE_URL_BLOG && destination === 'blog') ||
    (CURRENT_BASE_URL === BASE_URL_AUTH && destination === 'auth')
  )
}

export const getFullUrlFromPathname = (
  pathname: string,
  destination: Tenant
): string => `${getBaseUrlFromDestination(destination)}${pathname}`

const getBaseUrlFromDestination = (destination: Tenant): string => {
  const { BASE_URL_AUTH, BASE_URL_WEBSITE, BASE_URL_BLOG } = getClientEnv()
  switch (destination) {
    case 'website':
      return BASE_URL_WEBSITE
    case 'blog':
      return BASE_URL_BLOG
    case 'auth':
      return BASE_URL_AUTH
  }
}
