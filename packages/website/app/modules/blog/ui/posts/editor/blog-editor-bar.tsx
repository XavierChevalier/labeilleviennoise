import type { FC } from 'react'
import IconArrowLeft from '@/modules/shared/icons/icon-arrow-left'
import { AppLink } from '@/modules/shared/link/app-link'
import { AppLinkButton } from '@/modules/shared/link/app-link-button'

interface BlogEditorBarProps {
  showPreviousLink: boolean
}

const BlogEditorBar: FC<BlogEditorBarProps> = ({ showPreviousLink }) => (
  <div className="bg-primary-50">
    <div className="flex items-center gap-4 py-4 container px-4 md:px-0">
      {showPreviousLink && (
        <AppLink to="/blog" className="flex gap-2 items-center">
          <IconArrowLeft />
          Retour à la liste
        </AppLink>
      )}
      <AppLinkButton variant="primary" to="/admin/blog/posts/new">
        Nouvel article
      </AppLinkButton>

      <AppLink to="/auth/logout" className="ml-auto">
        Se déconnecter
      </AppLink>
    </div>
  </div>
)

export default BlogEditorBar
