import { preventPageIndexing } from '@labeilleviennoise/seo'
import { permanentRedirectToLogin } from '@/modules/auth/redirect-auth.server'

export const meta = preventPageIndexing

export const loader = permanentRedirectToLogin
