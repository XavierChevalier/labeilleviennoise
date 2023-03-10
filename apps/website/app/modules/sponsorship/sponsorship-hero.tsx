import { IconArrowRight } from '@labeilleviennoise/icons'
import { AppLink, AppLinkButton } from '@labeilleviennoise/ui'
import { IKImage } from 'imagekitio-react'
import CenteredImageContainer from '@/modules/shared/images/centered-image-container'

export default function SponsorshipHero() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="md:mr-auto place-self-center md:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Devenez parrain
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          Avec L'Abeille Viennoise, vous pouvez aider à faire éclore de
          nouvelles colonies d'abeilles et les protéger pour qu'elles continuent
          à butiner joyeusement. En plus, vous vous{' '}
          <AppLink destination="shop" to="/">
            régalerez avec les saveurs sucrées de nos miels de qualité
            supérieure
          </AppLink>
          .
        </p>
        <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          Rejoignez-nous pour une{' '}
          <AppLink destination="website" to="/la-miellerie">
            expérience passionnante et ludique
          </AppLink>{' '}
          dans le monde des abeilles.
        </p>
        <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          Venez découvrir le miel comme vous ne l'avez jamais vu !
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <AppLinkButton variant="primary" to="#pricing" destination="website">
            Choisir une formule
            <IconArrowRight />
          </AppLinkButton>

          <AppLinkButton to="/pages/contact" destination="shop">
            Contactez-nous
          </AppLinkButton>
        </div>
      </div>

      <div className="hidden md:mt-0 md:col-span-5 md:flex">
        <CenteredImageContainer>
          <IKImage
            path="images/ludovic-apiculteur.jpg"
            alt="Ludovic apiculteur"
            className="rounded-md"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '500' }]}
          />
        </CenteredImageContainer>
      </div>
    </section>
  )
}
