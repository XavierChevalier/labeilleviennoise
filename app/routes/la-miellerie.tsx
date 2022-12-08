import HoneyHouseHero from '@/modules/honey-house/honey-house-hero'
import HoneyHouseSteps from '@/modules/honey-house/honey-house-steps'
import IconArrowRight from '@/modules/shared/icons/icon-arrow-right'
import { AppLinkButton } from '@/modules/shared/link/app-link-button'
import SponsorshipCallToAction from '@/modules/sponsorship/sponsorship-call-to-action'

export default function LaMiellerie() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="p-4">
        <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
          La Miellerie
        </h1>

        <p className="text-center font-light text-gray-500 md:text-md md:text-xl dark:text-gray-400">
          Nos produits artisanaux, faits à la main avec 🧡
        </p>
      </div>

      <HoneyHouseHero />

      <div className="p-4 text-center">
        <p className="mb-4 text-center font-light text-gray-500 md:text-md md:text-xl dark:text-gray-400">
          Voir tous nos produits sur la boutique
        </p>

        <AppLinkButton variant="primary" to="/boutique">
          Visiter la boutique
          <IconArrowRight />
        </AppLinkButton>
      </div>

      <div className="px-4">
        <HoneyHouseSteps />
        <SponsorshipCallToAction />
      </div>
    </div>
  )
}
