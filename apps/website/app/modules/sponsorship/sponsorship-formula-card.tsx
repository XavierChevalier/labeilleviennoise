import type { FC, HTMLProps } from 'react'
import PricingFormulaCard from '@/modules/sponsorship/pricing/pricing-formula-card'
import PricingFormulaCardList from '@/modules/sponsorship/pricing/pricing-formula-card-list'
import PricingFormulaCardListItem from '@/modules/sponsorship/pricing/pricing-formula-card-list-item'

const SponsorshipFormulaCard: FC<HTMLProps<HTMLElement>> = ({ className }) => (
  <PricingFormulaCard
    title="Formule entreprise"
    price={1499}
    isVatIncluded={true}
    isPerYear={true}
    className={className}
  >
    <PricingFormulaCardList>
      <PricingFormulaCardListItem after="1 ruche plastique + 1 hausse">
        40.000 abeilles préservées
      </PricingFormulaCardListItem>

      <PricingFormulaCardListItem after="Par an avec prêt du matériel apicole (combinaisons, gants et enfumoir)">
        5 visites accompagnées possibles
      </PricingFormulaCardListItem>

      <PricingFormulaCardListItem>
        Traitements de la ruche
      </PricingFormulaCardListItem>

      <PricingFormulaCardListItem after="Par an">
        12 interventions sur site
      </PricingFormulaCardListItem>

      <PricingFormulaCardListItem>
        Récolte du miel puis mise en seaux
      </PricingFormulaCardListItem>

      <PricingFormulaCardListItem after="Au delà sur devis">
        Déplacement sur 50km autour de Vienne
      </PricingFormulaCardListItem>

      <PricingFormulaCardListItem after="Mise en pots, étiquetage...">
        Prestations supplémentaires sur devis
      </PricingFormulaCardListItem>
    </PricingFormulaCardList>
  </PricingFormulaCard>
)

export default SponsorshipFormulaCard
