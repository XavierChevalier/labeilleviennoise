import { buildMeta } from '@labeilleviennoise/seo'
import PricingFormulas from '@/modules/sponsorship/pricing/pricing-formulas'
import SponsorshipCallToActionCompany from '@/modules/sponsorship/sponsorship-call-to-action-company'
import SponsorshipHero from '@/modules/sponsorship/sponsorship-hero'
import SponsorshipWhy from '@/modules/sponsorship/sponsorship-why'

export const meta = buildMeta({
  title: "Parrainage - L'Abeille Viennoise",
  description:
    "Parrainez une ruche et soutenez l'apiculture urbaine. Vous recevrez des produits et des nouvelles de votre ruche !",
})

export default function Parrainage() {
  return (
    <div>
      <SponsorshipHero />
      <SponsorshipWhy />
      <PricingFormulas />
      <SponsorshipCallToActionCompany />
    </div>
  )
}
