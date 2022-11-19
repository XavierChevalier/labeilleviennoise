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
          Les avantages sont répartis sur l'année. C'est grâce à votre
          parrainage que nous ferons un pas de géant pour le respect de la
          biodiversité.
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
              5.000 fleurs plantées
              <small className="block text-sm text-gray-500">
                1 fleur = 1 abeille heureuse
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 mascotte L'Abeille Viennoise
              <small className="block text-sm text-gray-500">
                valeur approximative 20€
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 pot de miel toutes fleurs de 500g
              <small className="block text-sm text-gray-500">
                étiquette personnalisée
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              Des nouvelles des abeilles accompagnée de photos pour suivre
              l'évolution des ruches
              <small className="block text-sm text-gray-500">
                1 par trimestre
              </small>
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
              Tous les avantages de la formule{' '}
              <span className="font-bold">Nectar</span>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              20.000 abeilles préservées
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 mascotte L'Abeille Viennoise
              <small className="block text-sm text-gray-500">
                valeur approximative 40€
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 arbre planté
              <small className="block text-sm text-gray-500">par an</small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              4 pots de miel toutes fleurs de 250g
              <small className="block text-sm text-gray-500">
                1 par trimestre
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 coffret gourmand surprise
              <small className="block text-sm text-gray-500">par an</small>
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
              Tous les avantages de la formule{' '}
              <span className="font-bold">Propolis</span>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              40.000 abeilles préservées
              <small className="block text-sm text-gray-500">
                soit une ruche entière
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              2 mascottes L'Abeille Viennoise
              <small className="block text-sm text-gray-500">
                celles des formules précédentes
              </small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              4 arbres plantés
              <small className="block text-sm text-gray-500">par an</small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              4 pots de miel toutes fleurs de 250g
              <small className="block text-sm text-gray-500">par an</small>
            </PricingFormulaCardListItem>

            <PricingFormulaCardListItem>
              1 coffret gourmand surprise
              <small className="block text-sm text-gray-500">par an</small>
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
