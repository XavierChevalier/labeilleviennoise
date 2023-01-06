import { preventPageIndexing } from '@labeilleviennoise/seo'
import { redirectToLogin } from '@/modules/auth/redirect-auth.server'

export const meta = preventPageIndexing

export const loader = redirectToLogin
