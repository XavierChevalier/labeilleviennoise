import { AuthContext } from '@labeilleviennoise/auth/dist/auth-context'
import type { FC } from 'react'
import { useContext } from 'react'
import { AppLink } from '@/modules/shared/link/app-link'
import { AppLinkButton } from '@/modules/shared/link/app-link-button'

export interface BlogPostOfBlogPostsListItem {
  slug: string
  title: string
  description: string
  createdAt: Date
}

interface BlogPostsListItemProps {
  post: BlogPostOfBlogPostsListItem
}

const BlogPostsListItem: FC<BlogPostsListItemProps> = ({
  post,
  ...attributes
}) => (
  <li
    className="
      relative
      flex
      flex-col
      gap-4
      p-5
      transition-transform
      hover:translate-x-1
      hover:-translate-y-1

      before:z-[-1]
      before:w-full
      before:h-full
      before:rounded-md
      before:bg-primary/30
      before:absolute
      before:top-2
      before:-left-2
      before:transition-transform
      hover:before:-translate-x-2
      hover:before:translate-y-2

      after:z-[-1]
      after:w-full
      after:h-full
      after:rounded-md
      after:bg-gray-50
      after:absolute
      after:top-0
      after:left-0
      "
    {...attributes}
  >
    <AppLink
      to={`/blog/${post.slug}`}
      className="text-4xl no-underline font-bold"
    >
      {post.title}
    </AppLink>
    <p className="text-gray-500">{post.createdAt.toDateString()}</p>
    <p>{post.description}</p>
    <AppLink to={`/blog/${post.slug}`}>Lire l'article</AppLink>

    <BlogPostsListItemButtonsManager post={post} />
  </li>
)

const BlogPostsListItemButtonsManager: FC<BlogPostsListItemProps> = ({
  post,
}) => {
  const { isAuthenticated } = useContext(AuthContext)
  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex justify-end">
      <AppLinkButton to={`/admin/blog/posts/${post.slug}/edit`}>
        Modifier
      </AppLinkButton>
      <AppLinkButton to={`/admin/blog/posts/${post.slug}/delete`}>
        Supprimer
      </AppLinkButton>
    </div>
  )
}

export default BlogPostsListItem
