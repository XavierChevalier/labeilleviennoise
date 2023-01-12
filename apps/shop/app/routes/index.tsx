import { buildMeta } from '@labeilleviennoise/seo'
import { AppLinkButton } from '@labeilleviennoise/ui'

export const meta = buildMeta({
  title: "La boutique - L'Abeille Viennoise",
  description:
    "Venez découvrir tous les produits de l'Abeille Viennoise, autour du miel, des abeilles et du crochet.",
})

export default function Boutique() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-8 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
          Un peu de patience...
        </h1>
        <p className="mb-2 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
          La boutique n'est pas encore prête, mais elle le sera bientôt !
        </p>
        <p className="mb-8 text-lg font-light text-gray-500">C'est promis :)</p>
        <AppLinkButton variant="primary" to="/" destination="website">
          Retour à l'accueil
        </AppLinkButton>
      </div>
    </div>
  )
}
