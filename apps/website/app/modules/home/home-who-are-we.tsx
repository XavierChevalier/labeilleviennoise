import { AppLink } from '@labeilleviennoise/ui'
import { IKImage } from 'imagekitio-react'

export default function HeroWhoAreWe() {
  return (
    <section className="min-h-[560px] md:min-h-[700px] flex flex-col gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div className="md:order-2">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Qui sommes-nous ?
        </h2>

        <p className="mb-6 font-light text-gray-500 md:text-lg">
          <AppLink to="/equipe" destination="website">
            Anne-Marie et Ludovic
          </AppLink>
          , deux amoureux de la nature et des abeilles dont l'aventure apicole a
          commencé à Vienne, en Isère, avec quelques ruches pour le plaisir.
          Mais la passion pour ces merveilleuses créatures a pris le dessus,
          jusqu'à devenir un métier et une raison de vivre.
        </p>

        <p className="mb-6 font-light text-gray-500 md:text-lg">
          C'est ainsi que L'Abeille Viennoise est née, avec pour mission de
          préserver les abeilles et leur environnement, tout en produisant des
          miels de qualité supérieure. Chez nous,{' '}
          <strong className="font-bold">
            l'artisanat et l'approche humaine sont au cœur de tout ce que nous
            faisons
          </strong>
          , car nous sommes convaincus que les abeilles méritent notre
          protection et notre amour.
        </p>

        <p className="mb-6 font-light text-gray-500 md:text-lg">
          <AppLink destination="website" to="/parrainage">
            Rejoignez-nous dans cette aventure passionnante
          </AppLink>{' '}
          et pleine de sens, où chaque journée est une nouvelle occasion de
          travailler avec ces merveilleuses créatures et de contribuer à leur
          sauvegarde. Avec nous, découvrez une{' '}
          <strong className="font-bold">
            apiculture responsable et respectueuse
          </strong>
          , où la passion et l'engagement sont les maîtres-mots.
        </p>
      </div>

      <IKImage
        path="images/ludovic-et-anne-marie.jpeg"
        alt="Ludovic et Anne-Marie, les fondateurs de L'Abeille Viennoise"
        className="rounded-lg md:order-1"
        lqip={{ active: true, quality: 10 }}
        transformation={[
          {
            width: '700',
            height: '700',
          },
        ]}
      />
    </section>
  )
}
