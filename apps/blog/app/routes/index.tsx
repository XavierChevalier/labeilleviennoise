import { googleAuthenticator } from '@/modules/auth/auth.server'
import { AuthContext } from '@labeilleviennoise/auth-client'
import { buildMeta } from '@labeilleviennoise/seo'
import type { LoaderFunction } from '@remix-run/node'
import { useMatches } from '@remix-run/react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import { findAllBlogPosts } from '@/modules/blog/queries/find-all-blog-posts.server'
import BlogPostsList from '@/modules/blog/ui/posts/blog-posts-list'
import BlogEditorBar from '@/modules/blog/ui/posts/editor/blog-editor-bar'

export const meta = buildMeta({
  title: "Blog - L'Abeille Viennoise",
  description:
    "Retrouvez ici tous les articles du blog de L'Abeille Viennoise, sur le miel et les abeilles.",
})

export const loader = (async ({ request }) =>
  typedjson({
    isAuthenticated: !!(await googleAuthenticator.isAuthenticated(request)),
    blogPosts: await findAllBlogPosts(),
  })) satisfies LoaderFunction

export default function Index() {
  const { isAuthenticated, blogPosts } = useTypedLoaderData<typeof loader>()
  const routeMatches = useMatches()
  const currentPageIsNotBlogList = !routeMatches.find(
    (match) => match.id === 'routes/index'
  )

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {isAuthenticated && (
        <BlogEditorBar showPreviousLink={currentPageIsNotBlogList} />
      )}

      <div className="py-10 container">
        <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
          Articles
        </h1>

        <BlogPostsList posts={blogPosts} />
      </div>
    </AuthContext.Provider>
  )
}
