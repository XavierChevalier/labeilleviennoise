import { AppLink } from '@/modules/shared/link/app-link'
import PricingComparison from '@/modules/sponsorship/pricing/pricing-comparison'

export default function PricingFormulas() {
  return (
    <section
      id="pricing"
      className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    >
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Choisissez le plan qui vous correspond
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          <strong className="font-bold">
            Les avantages sont répartis sur l'année.
          </strong>{' '}
          C'est grâce à votre parrainage que nous ferons un pas de géant pour le
          respect de la biodiversité.
          <br />
          <AppLink to="/parrainage-entreprise" className="text-sm">
            Vous avez un projet de parrainage pour votre entreprise ?
          </AppLink>
        </p>
      </div>

      <PricingComparison />
    </section>
  )
}
