import type { FC } from 'react'
import type { BlogPostOfBlogPostsListItem } from '@/modules/blog/ui/posts/blog-posts-list-item'
import BlogPostsListItem from '@/modules/blog/ui/posts/blog-posts-list-item'

interface BlogPostsListProps {
  posts: BlogPostOfBlogPostsListItem[]
}

const BlogPostsList: FC<BlogPostsListProps> = ({ posts }) => (
  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {posts.map((post) => (
      <BlogPostsListItem key={post.slug} post={post} />
    ))}
  </ul>
)

export default BlogPostsList
