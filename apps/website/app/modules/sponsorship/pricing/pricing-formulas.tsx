import { AppLink } from '@labeilleviennoise/ui'
import PricingComparison from '@/modules/sponsorship/pricing/pricing-comparison'

export default function PricingFormulas() {
  return (
    <section
      id="pricing"
      className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    >
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Choisissez le plan qui vous correspond
        </h2>

        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Vous ne savez pas quel plan de parrainage choisir ?{' '}
          <AppLink destination="shop" to="/pages/contact">
            Pas de panique, on est là pour vous aider à trouver celui qui vous
            correspond le mieux !
          </AppLink>
        </p>

        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          En plus,{' '}
          <strong className="font-bold">
            les avantages sont répartis tout au long de l'année
          </strong>
          , pour que vous puissiez profiter de votre parrainage pendant des
          mois. En parrainant les abeilles avec nous, vous contribuez grandement
          à la préservation de la biodiversité et à la protection de nos amies
          les abeilles. Et ça, c'est vraiment génial !
          <br />
          <AppLink
            to="/parrainage-entreprise"
            destination="website"
            className="text-sm"
          >
            Vous avez un projet de parrainage pour votre entreprise ?
          </AppLink>
        </p>
      </div>

      <PricingComparison />
    </section>
  )
}
