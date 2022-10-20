import { json } from '@remix-run/node'
import PricingFormulas from '@/modules/pricing/pricing-formulas'
import SponsorshipHero from '@/modules/sponsorship/sponsorship-hero'
import SponsorshipWhy from '@/modules/sponsorship/sponsorship-why'

export async function loader() {
  return json({
    envContactMail: process.env.PUBLIC_CONTACT_MAIL,
  })
}

export default function Parrainage() {
  return (
    <>
      <SponsorshipHero />
      <SponsorshipWhy />
      <PricingFormulas />
    </>
  )
}
