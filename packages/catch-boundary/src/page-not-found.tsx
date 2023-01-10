import type { FC } from 'react'
import ErrorPage from './error-page'

interface PageNotFoundProps {
  title?: string
}

const PageNotFound: FC<PageNotFoundProps> = ({ title = '404' }) => (
  <ErrorPage title={title}>
    <p>Il n'y a rien ici.</p>
    <p className="mb-4 text-lg font-light text-gray-500">
      Désolé, nous ne trouvons pas la page. Essayez de retourner sur la page
      d'accueil ou visitez les autres liens du menu de navigation.
    </p>
  </ErrorPage>
)
export default PageNotFound
