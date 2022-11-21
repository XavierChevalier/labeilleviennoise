import PricingFormulaCard from './pricing-formula-card'
import PricingFormulaCardList from './pricing-formula-card-list'
import PricingFormulaCardListItem from './pricing-formula-card-list-item'
import PricingFormulaPerSwitch from './pricing-formula-per-switch'
import AppLink from '@/modules/shared/link/app-link'
import { useURL } from '@/modules/shared/location/use-url'
import { useToggle } from '@/modules/shared/states/use-toggle'

type Formula = 'nectar' | 'propolis' | 'geleeRoyale'
type FormulaLabel = 'Nectar' | 'Propolis' | 'Gelée Royale'
interface FormulaPrices {
  perMonth: number
  perYear: number
}

export default function PricingFormulas() {
  const [isPerYear, togglePaymentInterval] = useToggle(false)
  const priceSelector: keyof FormulaPrices = isPerYear ? 'perYear' : 'perMonth'
  const formulasPrices: Record<Formula, FormulaPrices> = {
    nectar: {
      perMonth: 9.99,
      perYear: 109.99,
    },
    propolis: {
      perMonth: 29.99,
      perYear: 320.99,
    },
    geleeRoyale: {
      perMonth: 59.99,
      perYear: 659.99,
    },
  }
  const { createUrl } = useURL()
  const createContactUrl = (appendSearchParameters: Record<string, string>) => {
    const url = createUrl('/contact-parrainage')
    url.searchParams.set('per', isPerYear ? 'annuel' : 'mensuel')
    Object.entries(appendSearchParameters).forEach(([key, value]) =>
      url.searchParams.set(key, value)
    )

    return url
  }
  const createFormulaContactUrl = (formula: FormulaLabel) =>
    createContactUrl({ title: formula })
  const createFormulaButton = (formula: FormulaLabel) => (
    <AppLink
      to={createFormulaContactUrl(formula)}
      className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg focus:ring-4 mt-auto no-underline text-white bg-primary hover:bg-primary-500 focus:ring-primary-300 dark:focus:ring-primary-900"
    >
      Prendre contact
    </AppLink>
  )

  return (
    <section
      id="pricing"
      className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    >
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Choisissez le plan qui vous correspond
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Les avantages sont répartis sur l'année. C'est grâce à votre
          parrainage que nous ferons un pas de géant pour le respect de la
          biodiversité.
          <br />
          <AppLink to="/parrainage-entreprise" className="text-sm">
            Vous avez un projet de parrainage pour votre entreprise ?
          </AppLink>
        </p>
      </div>

      <div className="flex justify-center mb-5">
        <PricingFormulaPerSwitch
          isToggled={isPerYear}
          onToggle={togglePaymentInterval}
        />
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <PricingFormulaCard
          title="Nectar"
          price={formulasPrices.nectar[priceSelector]}
          isPerYear={isPerYear}
          appendChildren={createFormulaButton('Nectar')}
        >
          <PricingFormulaCardList>
            <PricingFormulaCardListItem>
              5.000 abeilles préservées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="1 fleur = 1 abeille heureuse">
              5.000 fleurs plantées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Valeur approximative 20€">
              1 mascotte L'Abeille Viennoise
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Étiquette personnalisée">
              1 pot de miel toutes fleurs de 500g
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="1 par trimestre">
              Des nouvelles des abeilles accompagnées de photos pour suivre
              l'évolution des ruches
            </PricingFormulaCardListItem>
          </PricingFormulaCardList>
        </PricingFormulaCard>

        <PricingFormulaCard
          title="Propolis"
          price={formulasPrices.propolis[priceSelector]}
          isPerYear={isPerYear}
          appendChildren={createFormulaButton('Propolis')}
        >
          <PricingFormulaCardList>
            <PricingFormulaCardListItem>
              Tous les avantages de la formule{' '}
              <span className="font-bold">Nectar</span>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              20.000 abeilles préservées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Valeur approximative 40€">
              1 mascotte L'Abeille Viennoise
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Par an">
              1 arbre planté
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="1 par trimestre">
              4 pots de miel toutes fleurs de 250g
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Par an">
              1 coffret gourmand surprise
            </PricingFormulaCardListItem>
          </PricingFormulaCardList>
        </PricingFormulaCard>

        <PricingFormulaCard
          title="Gelée Royale"
          price={formulasPrices.geleeRoyale[priceSelector]}
          isPerYear={isPerYear}
          appendChildren={createFormulaButton('Gelée Royale')}
        >
          <PricingFormulaCardList>
            <PricingFormulaCardListItem>
              Tous les avantages de la formule{' '}
              <span className="font-bold">Propolis</span>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Soit une ruche entière">
              40.000 abeilles préservées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Celles des formules précédentes">
              2 mascottes L'Abeille Viennoise
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Par an">
              4 arbres plantés
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Par an">
              4 pots de miel toutes fleurs de 250g
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem after="Par an">
              1 coffret gourmand surprise
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 plaque nominative sur votre ruche
            </PricingFormulaCardListItem>
          </PricingFormulaCardList>
        </PricingFormulaCard>
      </div>
    </section>
  )
}
