import { IKImage } from 'imagekitio-react'

export default function CollaboratorsSection() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-4 max-w-screen-sm lg:mb-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Nos collaborateurs
        </h2>
        <p className="font-light text-gray-500 sm:text-xl">
          Découvrez nos partenaires
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 py-8 items-center justify-center text-center">
        <a
          href="https://vienne.fr"
          target="_blank"
          className="block w-64 cursor-alias"
          rel="noreferrer"
        >
          <img
            src="https://vienne.fr/wp-content/uploads/2020/08/logo_vienne.png"
            alt="Logo de la Ville de Vienne"
          />
        </a>
        <a
          href="https://arbres-and-co.fr"
          target="_blank"
          className="block w-64 cursor-alias"
          rel="noreferrer"
        >
          <img
            src="https://images-ext-2.discordapp.net/external/ZQWhmpTyQY-BIzt2EvFGamHxh7TOUuNMgcJFFPOvtTM/https/i0.wp.com/arbres-and-co.fr/wp-content/uploads/2022/04/copie-LOGO-Arbres-and-Co-NOIR-vectorise-01-e1649921197265.jpg"
            alt="Logo de la société Arbres & Co"
          />
        </a>
        <a
          href="https://monhistoiredecrochet.com"
          target="_blank"
          className="block w-64 cursor-alias"
          rel="noreferrer"
        >
          <IKImage
            path="images/collaborateurs/mon-histoire-de-crochet.png?2"
            alt="Logo de Mon Histoire de Crochet"
          />
        </a>
      </div>
    </div>
  )
}
