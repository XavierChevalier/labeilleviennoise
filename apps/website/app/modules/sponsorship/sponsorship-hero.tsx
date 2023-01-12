import { IconArrowRight } from '@labeilleviennoise/icons'
import { AppLinkButton } from '@labeilleviennoise/ui'
import { IKImage } from 'imagekitio-react'

export default function SponsorshipHero() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="mr-auto place-self-center md:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Devenez parrain
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl">
          Choisissez une formule et contactez-nous par email.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <AppLinkButton variant="primary" to="#pricing" destination="website">
            Choisir une formule
            <IconArrowRight />
          </AppLinkButton>

          <AppLinkButton to="/contact" destination="website">
            Contactez-nous
          </AppLinkButton>
        </div>
      </div>

      <div className="hidden md:mt-0 md:col-span-5 md:flex">
        <IKImage
          path="images/ludovic-apiculteur.jpeg"
          alt="Ludovic apiculteur"
          className="rounded-md"
          lqip={{ active: true, quality: 10 }}
          transformation={[{ width: '500' }]}
        />
      </div>
    </section>
  )
}
