import illustration from 'app/assets/images/ludovic-et-anne-marie.jpg'

export default function HeroWhoAreWe() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          src={illustration}
          alt="Préparation du miel par Ludovic et Anne-Marie"
          width="700"
          className="rounded-lg"
        />

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Qui sommes-nous ?
          </h2>

          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            L’abeille Viennoise, c’est une entreprise apicole située à Vienne
            dans l’Isère, née de la passion d’Anne-Marie et Ludovic pour la
            nature et la sauvegarde des abeilles.
          </p>

          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            De quelques ruches pour le plaisir, la passion s’est transformée
            pour devenir une raison de travail et un mode de vie. De vraies
            valeurs artisanales et une dimension humaine, tels sont les
            principes de la société.
          </p>
        </div>
      </div>
    </section>
  )
}
