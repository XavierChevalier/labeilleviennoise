import { EnvContext } from '@/root'
import { IconArrowLeft } from '@labeilleviennoise/icons'
import { AppLink, AppLinkExternal, AppLinkButton } from '@labeilleviennoise/ui'
import type { FC } from 'react'
import { useContext } from 'react'

interface BlogEditorBarProps {
  showPreviousLink: boolean
}

const BlogEditorBar: FC<BlogEditorBarProps> = ({ showPreviousLink }) => {
  const { BASE_URL_AUTH } = useContext(EnvContext)

  return (
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

        <AppLinkExternal href={`${BASE_URL_AUTH}/logout`} className="ml-auto">
          Se déconnecter
        </AppLinkExternal>
      </div>
    </div>
  )
}

export default BlogEditorBar
