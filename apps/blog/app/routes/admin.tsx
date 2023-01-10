import {
  googleAuthenticator,
  redirectIfNotAuthenticatedLoader,
} from '@/modules/auth/auth.server'
import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import BlogEditorBar from '@/modules/blog/ui/posts/editor/blog-editor-bar'

export const meta: MetaFunction = preventPageIndexing

export const loader = ((loaderArgs) =>
  redirectIfNotAuthenticatedLoader(googleAuthenticator)(
    loaderArgs
  )) satisfies LoaderFunction

export default function Admin() {
  return (
    <>
      <BlogEditorBar showPreviousLink={true} />
      <Outlet />
    </>
  )
}
