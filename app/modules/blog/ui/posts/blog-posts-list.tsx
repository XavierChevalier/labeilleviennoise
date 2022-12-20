import type { FC } from 'react'
import type { BlogPostOfBlogPostsListItem } from '@/modules/blog/ui/posts/blog-posts-list-item'
import BlogPostsListItem from '@/modules/blog/ui/posts/blog-posts-list-item'

interface BlogPostsListProps {
  posts: BlogPostOfBlogPostsListItem[]
}

const BlogPostsList: FC<BlogPostsListProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="my-8 text-center text-gray-500">
        Il n'y a pas encore d'article ici. Revenez plus tard !
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {posts.map((post) => (
        <BlogPostsListItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default BlogPostsList
