import PricingFormulas from '@/modules/pricing/pricing-formulas'
import SponsorshipHero from '@/modules/sponsorship/sponsorship-hero'
import SponsorshipWhy from '@/modules/sponsorship/sponsorship-why'

export default function Parrainage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <SponsorshipHero />
      <SponsorshipWhy />
      <PricingFormulas />
    </div>
  )
}
