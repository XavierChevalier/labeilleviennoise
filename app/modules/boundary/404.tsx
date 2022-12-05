import { AppLink } from '@/modules/shared/link/app-link'

export default function PageNotFound() {
  return (
    <section className="min-h-[60vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-amber-600 dark:text-amber-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Il n'y a rien ici.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Désolé, nous ne trouvons pas la page. Essayez de retourner sur la
            page d'accueil ou visitez les autres liens du menu de navigation.
          </p>
          <AppLink to="/">Retour à l'accueil</AppLink>
        </div>
      </div>
    </section>
  )
}
