import HomeHero from '@/modules/home/home-hero'
import HomeOurProducts from '@/modules/home/home-our-products'
import HomeWhoAreWe from '@/modules/home/home-who-are-we'
import HomeWhyWeDoThis from '@/modules/home/home-why-we-do-this'

export default function Index() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HomeHero />
      <HomeWhoAreWe />
      <HomeOurProducts />
      <HomeWhyWeDoThis />
    </div>
  )
}
