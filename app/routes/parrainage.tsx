import type { MetaFunction } from '@remix-run/node'
import { generateMeta } from '@/modules/shared/seo/meta'
import PricingFormulas from '@/modules/sponsorship/pricing/pricing-formulas'
import SponsorshipCallToActionCompany from '@/modules/sponsorship/sponsorship-call-to-action-company'
import SponsorshipHero from '@/modules/sponsorship/sponsorship-hero'
import SponsorshipWhy from '@/modules/sponsorship/sponsorship-why'

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Parrainage - L'Abeille Viennoise",
    description:
      "Parrainez une ruche et soutenez l'apiculture urbaine. Vous recevrez des produits et des nouvelles de votre ruche !",
    url: `${process.env.BASE_URL}/parrainage`,
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
