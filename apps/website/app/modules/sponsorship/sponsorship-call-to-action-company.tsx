import { AppLink, AppLinkButton } from '@labeilleviennoise/ui'
import { IKImage } from 'imagekitio-react'
import CenteredImageContainer from '@/modules/shared/images/centered-image-container'

export default function SponsorshipCallToActionCompany() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="order-2 md:order-1 place-self-center md:col-span-6 lg:col-span-7">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
          Vous avez un projet de parrainage pour votre entreprise ?
        </h1>

        <p className="mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          Nous sommes là pour vous aider à concrétiser ce beau projet !
        </p>

        <p className="mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          <AppLink destination="website" to="/parrainage-entreprise">
            N'hésitez pas à nous contacter
          </AppLink>{' '}
          pour en discuter et mettre en place une collaboration en faveur de nos
          amies les abeilles. Chez L'Abeille Viennoise, nous sommes toujours
          ravis de voir de nouvelles entreprises s'engager pour la protection de
          la biodiversité.
        </p>

        <p className="mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          Alors, prêt à rejoindre notre communauté d'apiculteurs engagés ?
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <AppLinkButton
            variant="primary"
            to="/parrainage-entreprise"
            destination="website"
          >
            Lancez-vous !
          </AppLinkButton>
        </div>
      </div>

      <div className="mb-6 md:mb-0 order-1 md:order-2 md:mt-0 md:col-span-6 lg:col-span-5 md:flex">
        <CenteredImageContainer>
          <IKImage
            path="images/bee-large.png"
            alt="Illustration d'une abeille"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '400' }]}
          />
        </CenteredImageContainer>
      </div>
    </section>
  )
}
