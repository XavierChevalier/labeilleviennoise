import { AppLinkExternal } from '@labeilleviennoise/ui'
import type { FC } from 'react'

const BlogEditorTips: FC = () => (
  <p className="text-gray-500 my-6">
    Utiliser l'éditeur{' '}
    <AppLinkExternal href="https://stackedit.io/app#">
      StackEdit
    </AppLinkExternal>{' '}
    pour écrire le contenu de l'article.
    <br />
    Ensuite, copier le contenu de l'éditeur dans le champ{' '}
    <strong className="font-bold">
      "Contenu de l'article au format Markdown"
    </strong>
    .
  </p>
)

export default BlogEditorTips
