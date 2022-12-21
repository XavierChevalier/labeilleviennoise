/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

interface PublicEnv {
  readonly BASE_URL: string
  readonly IS_DEV: boolean
  readonly IS_PRODUCTION: boolean
  readonly PUBLIC_CONTACT_MAIL: string
  readonly PUBLIC_FACEBOOK_URL: string
  readonly PUBLIC_INSTAGRAM_URL: string
  readonly PUBLIC_IMAGEKIT_URL_ENDPOINT: string
  readonly PUBLIC_IMAGEKIT_PUBLIC_KEY: string
}
