import AppButton from '@/modules/shared/button/app-button'

export default function Boutique() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-8 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            Un peu de patience...
          </h1>
          <p className="mb-2 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            La boutique n'est pas encore prête, mais elle le sera bientôt !
          </p>
          <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
            C'est promis :)
          </p>
          <AppButton type="primary" href="/">
            Retour à l'accueil
          </AppButton>
        </div>
      </div>
    </section>
  )
}
