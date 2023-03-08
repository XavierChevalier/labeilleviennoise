import { buildMeta } from '@labeilleviennoise/seo'
import HomeHero from '@/modules/home/home-hero'
import HomeOurProducts from '@/modules/home/home-our-products'
import HomeWhoAreWe from '@/modules/home/home-who-are-we'
import HomeWhyWeDoThis from '@/modules/home/home-why-we-do-this'

export const meta = buildMeta({
  title: "L'Abeille Viennoise",
  description:
    'Services autour du miel et des abeilles, de la vente de miels français et tout particulièrement viennois, aux parrainages de ruches pour particuliers ou entreprises.',
})

export default function Index() {
  return (
    <div className="bg-white">
      <HomeHero />
      <HomeWhoAreWe />
      <HomeOurProducts />
      <HomeWhyWeDoThis />
    </div>
  )
}
