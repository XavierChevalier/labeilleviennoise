export default function CollaboratorsSection() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-4 max-w-screen-sm lg:mb-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Nos collaborateurs
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Découvrez nos partenaires
        </p>
      </div>
      <div className="grid gap-8 lg:gap-16 grid-cols-2 h-96 items-center">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <a href="https://vienne.fr/" className="cursor-alias">
            <img
              className="mx-auto mb-4 max-w-96 max-h-96 rounded-md"
              src="https://vienne.fr/wp-content/uploads/2020/08/logo_vienne.png"
              alt="Logo de la Ville de Vienne"
            />
          </a>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <a href="https://arbres-and-co.fr/" className="cursor-alias">
            <img
              className="mx-auto mb-4 max-w-96 max-h-96 rounded-md"
              src="https://images-ext-2.discordapp.net/external/ZQWhmpTyQY-BIzt2EvFGamHxh7TOUuNMgcJFFPOvtTM/https/i0.wp.com/arbres-and-co.fr/wp-content/uploads/2022/04/copie-LOGO-Arbres-and-Co-NOIR-vectorise-01-e1649921197265.jpg"
              alt="Logo de la société Arbres & Co"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
