import type { FC } from 'react'
import ErrorPage from './error-page'

const UnknownError: FC = () => (
  <ErrorPage title="Oups... Une erreur est survenue !">
    <p>
      Désolé, une erreur est survenue. Essayez de retourner sur la page
      d'accueil ou visitez les autres liens du menu de navigation.
    </p>
  </ErrorPage>
)
export default UnknownError
