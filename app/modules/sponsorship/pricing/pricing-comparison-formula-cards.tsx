import type { Formulas } from '@/modules/sponsorship/pricing/pricing-comparison'
import PricingFormulaCard from '@/modules/sponsorship/pricing/pricing-formula-card'
import PricingFormulaCardList from '@/modules/sponsorship/pricing/pricing-formula-card-list'
import PricingFormulaCardListItem from '@/modules/sponsorship/pricing/pricing-formula-card-list-item'

export interface Props {
  isToggled: boolean
  formulas: Formulas
}

export default function PricingComparisonFormulaCards({
  isToggled,
  formulas,
}: Props) {
  const { nectar, propolis, geleeRoyale } = formulas
  return (
    <div className="lg:hidden space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
      <PricingFormulaCard
        title={nectar.title}
        pricePerMonth={nectar.pricePerMonth}
        pricePerYear={nectar.pricePerYear}
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
        title={propolis.title}
        pricePerMonth={propolis.pricePerMonth}
        pricePerYear={propolis.pricePerYear}
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
        title={geleeRoyale.title}
        pricePerMonth={geleeRoyale.pricePerMonth}
        pricePerYear={geleeRoyale.pricePerYear}
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
  )
}
