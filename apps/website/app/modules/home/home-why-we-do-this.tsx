import { IconArrowRight } from '@labeilleviennoise/icons'
import { AppLink, AppLinkButton } from '@labeilleviennoise/ui'
import { IKImage } from 'imagekitio-react'
import CenteredImageContainer from '@/modules/shared/images/centered-image-container'

export default function HomeWhyWeDoThis() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="mx-auto mb-6 md:mb-0 md:mt-0 md:col-span-6 lg:col-span-5 md:flex hidden">
        <CenteredImageContainer>
          <IKImage
            path="images/bee-cell-2.webp"
            alt="Illustration d'une abeille"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '500' }]}
          />
        </CenteredImageContainer>
      </div>

      <div className="mr-auto place-self-center md:col-span-6 lg:col-span-7 sm:py-6 lg:px-8">
        <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Pourquoi faisons-nous cela ?
        </h2>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          Nos amies les abeilles traversent actuellement une période critique.
          En effet, ces ouvrières acharnées font face à une perte importante de
          leurs colonies chaque année !
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          <strong className="font-bold">
            Heureusement, nous pouvons faire face à ce défi ensemble.
          </strong>
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          L'Abeille Viennoise est déterminée à agir concrètement pour la
          protection des abeilles et de leur environnement, et si vous aussi,
          vous souhaitez contribuer à leur sauvegarde,{' '}
          <AppLink destination="website" to="/parrainage">
            le parrainage des abeilles est une façon concrète d'y parvenir
          </AppLink>
          , ainsi qu'une aide pour installer de nouvelles colonies dans le
          respect de la biodiversité.
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          <strong className="font-bold">Avec votre soutien</strong>, nous
          pouvons œuvrer ensemble pour protéger ces merveilleuses créatures.
          Êtes-vous prêt à vous joindre à nous dans cette mission vitale ?
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <AppLinkButton
            variant="primary"
            to="/parrainage"
            destination="website"
          >
            Devenez parrain
            <IconArrowRight />
          </AppLinkButton>
        </div>
      </div>
    </section>
  )
}
