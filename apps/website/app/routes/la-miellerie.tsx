import { buildMeta } from '@labeilleviennoise/seo'
import { AppLinkExternal } from '@labeilleviennoise/ui'
import HoneyHouseHero from '@/modules/honey-house/honey-house-hero'
import HoneyHouseSteps from '@/modules/honey-house/honey-house-steps'

export const meta = buildMeta({
  title: "La Miellerie - L'Abeille Viennoise",
  description:
    "La miellerie de l'Abeille Viennoise est située à Vienne dans la Drôme. Découvrez comment nous produisons notre miel et nos produits.",
})

export default function LaMiellerie() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <HoneyHouseHeader />
      <HoneyHouseHero />
      <HoneyHouseSteps />
      <TheHoneyHouse />
    </div>
  )
}

function HoneyHouseHeader() {
  return (
    <div className="p-4">
      <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
        La Miellerie
      </h1>

      <p className="text-center font-light text-gray-500 md:text-md md:text-xl">
        Nos produits artisanaux, faits à la main avec 🧡
      </p>
    </div>
  )
}

export function TheHoneyHouse() {
  return (
    <div className="p-4">
      <h2 className="mb-10 md:mb-4 mt-8 md:mt-24 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-center text-primary">
        La boutique
      </h2>

      <section className="min-h-[560px] flex flex-col gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
        <div className="md:order-2">
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Profitez d'une visite à la boutique pour déguster nos{' '}
            <strong className="font-bold">miels urbains</strong> produits et
            récoltés en agglomération,{' '}
            <strong className="font-bold">
              Vienne, Chasse-sur-Rhône, Seyssuel ou encore Bourg-en-Bresse
            </strong>
            .
          </p>

          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Trouvez chez nous des{' '}
            <strong className="font-bold">cadeaux personnalisés</strong>,{' '}
            <strong className="font-bold">
              pots de miel, bougies et sujets en cire d'abeille
            </strong>
            , réalisons ensemble un produit qui vous ressemble.
          </p>

          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Découvrez également notre{' '}
            <strong className="font-bold">gamme cosmétique</strong> élaborée
            spécialement pour l'Abeille Viennoise par la{' '}
            <strong className="font-bold">Savonnerie de l'Ozon</strong>, à
            partir de notre production de miel et de cire :{' '}
            <strong className="font-bold">
              savon liquide, savon de rasage et le fameux déodorant solide
            </strong>{' '}
            à la cire d'abeille.
          </p>
        </div>

        <div className="md:order-1">
          <iframe
            className="w-full bg-gray-50 rounded-lg"
            title="L'Abeille Viennoise - La Miellerie"
            width="520"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=18%20RUE%20TESTE%20DU%20BAILLER%20VIENNE+(L'Abeille%20Viennoise)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
          <p className="mt-4 font-light text-gray-500 md:text-lg">
            Retrouvez-nous à{' '}
            <strong className="font-bold">
              La Miellerie de l'Abeille Viennoise
            </strong>{' '}
            au{' '}
            <AppLinkExternal
              href="https://maps.app.goo.gl/j5UxkbQ5otHN4dYg8"
              target="_blank"
            >
              18 rue Testé du Bailler, 38200 Vienne
            </AppLinkExternal>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
