import { AppLink } from '@labeilleviennoise/ui'
import { IKImage } from 'imagekitio-react'

export default function HomeOurProducts() {
  return (
    <section className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-6 lg:px-8">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Nos produits
        </h2>

        <ul className="list-disc list-inside font-light text-gray-500 md:text-lg">
          <li>Miel liquide ou crémeux 100 % artisanal</li>
          <li>
            <AppLink to="/la-miellerie" destination="website">
              Fabriqué à Vienne (Isère) par nos petites abeilles
            </AppLink>
          </li>
          <li>Production dans le respect de nos abeilles</li>
          <li>
            <AppLink to="/la-miellerie" destination="website">
              Mise en pot maison
            </AppLink>
          </li>
          <li>Projet et goodies réalisés en famille</li>
        </ul>
      </div>

      <IKImage
        path="images/pot-de-miel.webp"
        alt="Pot de miel"
        className="mx-auto"
        lqip={{ active: true, quality: 10 }}
        loading="lazy"
        transformation={[
          {
            height: '400',
            width: '400',
          },
        ]}
      />
    </section>
  )
}
