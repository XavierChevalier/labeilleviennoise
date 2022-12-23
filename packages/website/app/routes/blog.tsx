import { AuthContext } from '@labeilleviennoise/auth/dist/auth-context'
import type { LoaderArgs } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { useLocation } from 'react-router'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import { authenticator } from '@/modules/auth/authenticator.server'
import BlogEditorBar from '@/modules/blog/ui/posts/editor/blog-editor-bar'

export const loader = async ({ request }: LoaderArgs) =>
  typedjson({
    isAuthenticated: !!(await authenticator.isAuthenticated(request)),
  })

export default function Blog() {
  const { isAuthenticated } = useTypedLoaderData<typeof loader>()
  const location = useLocation()
  const currentPageIsNotBlogList = location.pathname !== '/blog'

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {isAuthenticated && (
        <BlogEditorBar showPreviousLink={currentPageIsNotBlogList} />
      )}
      <Outlet />
    </AuthContext.Provider>
  )
}
