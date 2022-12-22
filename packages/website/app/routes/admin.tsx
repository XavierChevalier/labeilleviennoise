import { redirectIfNotAuthenticatedLoader } from '@labeilleviennoise/auth/lib/authentication-guard.server'
import type { MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { authenticator } from '@/modules/auth/authenticator.server'
import BlogEditorBar from '@/modules/blog/ui/posts/editor/blog-editor-bar'
import { preventPageIndexing } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = preventPageIndexing

export const loader = redirectIfNotAuthenticatedLoader(authenticator)

export default function Admin() {
  return (
    <>
      <BlogEditorBar showPreviousLink={true} />
      <Outlet />
    </>
  )
}
