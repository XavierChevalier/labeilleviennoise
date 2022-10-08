/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
  readonly PUBLIC_CONTACT_MAIL: string
  readonly PUBLIC_FACEBOOK_URL: string
  readonly PUBLIC_INSTAGRAM_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
