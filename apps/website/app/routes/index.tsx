import { buildMeta } from '@labeilleviennoise/seo'
import HomeClosureAnnouncement from '@/modules/home/home-closure-announcement'
import HomeHero from '@/modules/home/home-hero'
import HomeOurProducts from '@/modules/home/home-our-products'
import HomeSocials from '@/modules/home/home-socials'
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
      <HomeClosureAnnouncement />
      <HomeWhoAreWe />
      <HomeOurProducts />
      <HomeWhyWeDoThis />
      <HomeSocials />
    </div>
  )
}
