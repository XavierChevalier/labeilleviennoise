import { generateMeta } from '@labeilleviennoise/seo'
import type { MetaFunction } from '@remix-run/node'
import { useTypedLoaderData } from 'remix-typedjson'
import { findBlogPostLoader } from '@/modules/blog/loaders/find-blog-post-loader'
import BlogPostContent from '@/modules/blog/ui/posts/blog-post-content'

export const meta: MetaFunction<typeof loader> = ({
  data: blogPost,
  params,
}) => {
  if (!blogPost) {
    return generateMeta({
      title: 'Article introuvable',
      description: "L'article que vous recherchez n'existe pas.",
      url: `https://labeilleviennoise.com/blog/${params.slug}`,
      noIndex: true,
    })
  }

  return generateMeta({
    title: blogPost.title,
    description: blogPost.description,
    url: `/blog/${blogPost.slug}`,
  })
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
