import { getClientEnv } from '@labeilleviennoise/environment-client'

export type Tenant = 'website' | 'blog' | 'auth' | 'shop'

export const isSameDestinationAsCurrentWebsite = (
  destination: Tenant
): boolean => {
  const {
    BASE_URL_AUTH,
    BASE_URL_WEBSITE,
    BASE_URL_BLOG,
    CURRENT_BASE_URL,
    BASE_URL_SHOP,
  } = getClientEnv()
  const isSameDestination = (baseUrl: string, tenant: Tenant): boolean =>
    CURRENT_BASE_URL === baseUrl && destination === tenant

  return (
    isSameDestination(BASE_URL_WEBSITE, 'website') ||
    isSameDestination(BASE_URL_BLOG, 'blog') ||
    isSameDestination(BASE_URL_AUTH, 'auth') ||
    isSameDestination(BASE_URL_SHOP, 'shop')
  )
}

export const getFullUrlFromPathname = (
  pathname: string,
  destination: Tenant
): string => `${getBaseUrlFromDestination(destination)}${pathname}`

const getBaseUrlFromDestination = (destination: Tenant): string => {
  const { BASE_URL_AUTH, BASE_URL_WEBSITE, BASE_URL_BLOG, BASE_URL_SHOP } =
    getClientEnv()
  switch (destination) {
    case 'website':
      return BASE_URL_WEBSITE
    case 'blog':
      return BASE_URL_BLOG
    case 'auth':
      return BASE_URL_AUTH
    case 'shop':
      return BASE_URL_SHOP
  }
}
