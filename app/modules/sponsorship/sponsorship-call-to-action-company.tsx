import AppButton from '../shared/button/app-button'
import { useURL } from '@/modules/shared/location/use-url'

export default function SponsorshipCallToActionCompany() {
  const { createUrl } = useURL()
  const to = createUrl('/contact-parrainage')
  to.searchParams.set('per', 'annuel')
  to.searchParams.set('title', 'parrainage entreprise')

  return (
    <section className="px-4 py-8 mb-8 mx-auto md:py-16 text-center">
      <div className="mr-auto order-2 md:order-1">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
          Vous avez un projet de parrainage pour votre entreprise ?
        </h1>
        <p className="mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl dark:text-gray-400">
          Nous pouvons répondre à vos attentes, n’hésitez pas à prendre contact
          avec nous.
        </p>

        <AppButton type="primary" href={to.toString()} className="mx-auto">
          Prendre contact
        </AppButton>
      </div>
    </section>
  )
}
