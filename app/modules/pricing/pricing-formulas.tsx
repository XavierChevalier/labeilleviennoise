import { useState } from 'react'
import PricingFormulaCard from './pricing-formula-card'
import PricingFormulaCardList from './pricing-formula-card-list'
import PricingFormulaCardListItem from './pricing-formula-card-list-item'
import PricingFormulaPerSwitch from './pricing-formula-per-switch'

export default function PricingFormulas() {
  const [isToggled, setIsToggled] = useState(false)
  const handleIsToggled = () => setIsToggled((prevState) => !prevState)

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
          Les récompenses sont annuelles seulement. Au bout d'un an de
          souscription, celles-ci vous seront envoyées. En choisissant une
          formule annuelle, les récompenses vous seront envoyées après paiement.
        </p>
      </div>

      <div className="flex justify-center mb-5">
        <PricingFormulaPerSwitch
          isToggled={isToggled}
          onToggle={handleIsToggled}
        />
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <PricingFormulaCard
          title="Nectar"
          pricePerMonth={9.99}
          pricePerYear={109.99}
          isToggled={isToggled}
        >
          <PricingFormulaCardList>
            <PricingFormulaCardListItem>
              5.000 abeilles préservées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              Une mascotte L'Abeille Viennoise
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              Une newsletter accompagnée de photos pour suivre l'évolution des
              ruches
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 pot de miel toutes fleurs de 250g
            </PricingFormulaCardListItem>
          </PricingFormulaCardList>
        </PricingFormulaCard>

        <PricingFormulaCard
          title="Propolis"
          pricePerMonth={29.99}
          pricePerYear={320.99}
          isToggled={isToggled}
        >
          <PricingFormulaCardList>
            <PricingFormulaCardListItem>
              20.000 abeilles préservées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              Une mascotte L'Abeille Viennoise
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              Une newsletter accompagnée de photos pour suivre l'évolution des
              ruches
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              3 pot de miel toutes fleurs de 250g
            </PricingFormulaCardListItem>
          </PricingFormulaCardList>
        </PricingFormulaCard>

        <PricingFormulaCard
          title="Gelée Royale"
          pricePerMonth={59.99}
          pricePerYear={659.99}
          isToggled={isToggled}
        >
          <PricingFormulaCardList>
            <PricingFormulaCardListItem>
              40.000 abeilles préservées
              <br />
              <small className="text-sm text-gray-500">
                soit une ruche entière
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              Une mascotte L'Abeille Viennoise
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              Une newsletter accompagnée de photos pour suivre l'évolution des
              ruches
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1.000 fleurs plantées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              4 pot de miel toutes fleurs de 250g
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 pot de miel toutes fleurs crémeux de 250g
            </PricingFormulaCardListItem>
          </PricingFormulaCardList>
        </PricingFormulaCard>
      </div>
    </section>
  )
}
