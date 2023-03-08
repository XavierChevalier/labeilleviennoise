import { AppLink, AppLinkButton } from '@labeilleviennoise/ui'
import { IKImage } from 'imagekitio-react'
import CenteredImageContainer from '@/modules/shared/images/centered-image-container'

export default function SponsorshipWhy() {
  return (
    <section className="min-h-[500px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="hidden lg:mt-0 md:col-span-5 md:flex">
        <CenteredImageContainer>
          <IKImage
            path="images/bee-swarm.jpeg"
            alt="Ludovic apiculteur"
            className="rounded-md"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '800' }]}
          />
        </CenteredImageContainer>
      </div>

      <div className="md:ml-auto place-self-center md:col-span-7">
        <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Pourquoi parrainer ?
        </h2>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:text-lg lg:text-xl">
          Saviez-vous que les abeilles ont été élues grande cause de 2022 ? En
          effet, ces petites ouvrières sont en danger depuis des décennies, avec
          une diminution de plus d'un tiers de la population d'abeilles en
          Europe.
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:text-lg lg:text-xl">
          Mais ce n'est pas tout ! Les abeilles ont un rôle crucial dans la
          pollinisation des plantes, qui représente un tiers de la nourriture
          que nous consommons. En effet, 80% des plantes dans le monde sont
          pollinisées par des insectes, dont 90% par des abeilles.
        </p>
        <p className="max-w-2xl mb-6 lg:mb-8 font-light text-gray-500 md:text-lg lg:text-xl">
          Chez L'Abeille Viennoise, nous avons décidé d'
          <AppLink destination="website" to="/le-rucher">
            agir concrètement pour protéger ces merveilleuses créatures
          </AppLink>
          . En parrainant des abeilles avec nous, vous contribuez à
          l'installation de nouvelles colonies en région Rhône-Alpes, et
          particulièrement sur Vienne en Isère. Nous travaillons pour favoriser
          le développement des abeilles dans le respect de la biodiversité,
          <strong className="font-bold">
            chaque parrainage est un geste important pour leur sauvegarde
          </strong>
          . Alors, êtes-vous prêt à faire partie de la solution ?
        </p>
        <p className="max-w-2xl mb-6 lg:mb-8 font-light text-gray-500 md:text-lg lg:text-xl">
          Et si vous avez un projet de{' '}
          <AppLink destination="website" to="/parrainage-entreprise">
            parrainage pour votre entreprise
          </AppLink>
          , n'hésitez pas à prendre contact avec nous. Nous pouvons répondre à
          vos attentes et travailler ensemble pour protéger nos amies les
          abeilles.
        </p>

        <AppLinkButton
          variant="primary"
          to="#pricing"
          destination="website"
          className="w-full sm:w-auto"
        >
          Je me lance !
        </AppLinkButton>
      </div>
    </section>
  )
}
