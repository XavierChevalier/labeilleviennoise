import { IconArrowLeft } from '@labeilleviennoise/icons'
import { AppLink, AppLinkButton } from '@labeilleviennoise/ui'
import type { FC } from 'react'

interface BlogEditorBarProps {
  showPreviousLink: boolean
}

const BlogEditorBar: FC<BlogEditorBarProps> = ({ showPreviousLink }) => (
  <div className="bg-primary-50">
    <div className="flex items-center gap-4 py-4 container px-4 md:px-0">
      {showPreviousLink && (
        <AppLink to="/" destination="blog" className="flex gap-2 items-center">
          <IconArrowLeft />
          Retour à la liste
        </AppLink>
      )}
      <AppLinkButton
        variant="primary"
        to="/admin/blog/posts/new"
        destination="blog"
      >
        Nouvel article
      </AppLinkButton>

      <AppLink to="/logout" destination="auth" className="ml-auto">
        Se déconnecter
      </AppLink>
    </div>
  </div>
)

export default BlogEditorBar
