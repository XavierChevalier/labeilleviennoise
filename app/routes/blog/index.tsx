import type { MetaFunction } from '@remix-run/node'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import { findAllBlogPosts } from '@/modules/blog/queries/find-all-blog-posts.server'
import BlogPostsList from '@/modules/blog/ui/posts/blog-posts-list'
import { generateMeta } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Blog - L'Abeille Viennoise",
    description:
      "Retrouvez ici tous les articles du blog de L'Abeille Viennoise, sur le miel et les abeilles.",
    url: `https://labeilleviennoise.com/blog`,
  })

export const loader = async () =>
  typedjson({ blogPosts: await findAllBlogPosts() })

export default function BlogIndex() {
  const { blogPosts } = useTypedLoaderData<typeof loader>()

  return (
    <div className="py-10 container">
      <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
        Articles
      </h1>

      <BlogPostsList posts={blogPosts} />
    </div>
  )
}
