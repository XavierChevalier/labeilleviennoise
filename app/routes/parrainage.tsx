import PricingFormulas from '@/modules/sponsorship/pricing/pricing-formulas'
import SponsorshipCallToActionCompany from '@/modules/sponsorship/sponsorship-call-to-action-company'
import SponsorshipHero from '@/modules/sponsorship/sponsorship-hero'
import SponsorshipWhy from '@/modules/sponsorship/sponsorship-why'

export default function Parrainage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <SponsorshipHero />
      <SponsorshipWhy />
      <PricingFormulas />
      <SponsorshipCallToActionCompany />
    </div>
  )
}
