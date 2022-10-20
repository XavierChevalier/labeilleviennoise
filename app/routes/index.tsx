import HomeHero from '@/modules/home/home-hero'
import HomeOurProducts from '@/modules/home/home-our-products'
import HomeWhoAreWe from '@/modules/home/home-who-are-we'

export default function Index() {
  return (
    <>
      <HomeHero />
      <HomeWhoAreWe />
      <HomeOurProducts />
    </>
  )
}
