import { buildMeta } from '@labeilleviennoise/seo'
import type { MetaFunction } from '@remix-run/node'
import { useTypedLoaderData } from 'remix-typedjson'
import { findBlogPostLoader } from '@/modules/blog/loaders/find-blog-post-loader'
import BlogPostContent from '@/modules/blog/ui/posts/blog-post-content'

export const meta: MetaFunction<typeof loader> = (metaArgs) => {
  const blogPost = metaArgs.data
  if (!blogPost) {
    return buildMeta({
      title: 'Article introuvable',
      description: "L'article que vous recherchez n'existe pas.",
      noIndex: true,
    })(metaArgs)
  }

  return buildMeta({
    title: blogPost.title,
    description: blogPost.description,
  })(metaArgs)
}

export const loader = findBlogPostLoader

export default function PostSlug() {
  const post = useTypedLoaderData<typeof loader>()

  return (
    <div className="container py-4 px-4 md:px-0">
      <p className="font-light text-gray-500 py-4">
        {post.createdAt.toDateString()}
      </p>
      <BlogPostContent title={post.title} markdown={post.markdown} />
    </div>
  )
}
