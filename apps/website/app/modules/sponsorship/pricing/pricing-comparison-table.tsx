import { IconCheck } from '@labeilleviennoise/icons'
import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { HTMLProps } from 'react'
import ButtonChosePlan from '@/modules/sponsorship/pricing/button-chose-plan'
import PeriodLabel from '@/modules/sponsorship/pricing/period-label'
import type { Formulas } from '@/modules/sponsorship/pricing/pricing-comparison'
import PricingComparisonTableBody from '@/modules/sponsorship/pricing/pricing-comparison-table-body'
import PricingComparisonTableHead from '@/modules/sponsorship/pricing/pricing-comparison-table-head'
import PricingComparisonTableRow from '@/modules/sponsorship/pricing/pricing-comparison-table-row'
import PricingComparisonTableRowCell from '@/modules/sponsorship/pricing/pricing-comparison-table-row-cell'
import PricingComparisonTableRowCellHead from '@/modules/sponsorship/pricing/pricing-comparison-table-row-cell-head'

interface Props extends HTMLProps<HTMLElement> {
  isToggled: boolean
  formulas: Formulas
}

export default function PricingComparisonTable({
  isToggled,
  formulas,
  className,
}: Props) {
  const { nectar, propolis, geleeRoyale } = formulas
  const stickyColumnClasses = 'text-left sticky -left-0.5 bg-white z-10'

  return (
    <table className={mergeClasses('table-fixed mx-auto lg:w-full', className)}>
      <PricingComparisonTableHead
        formulas={formulas}
        firstColumnClassName={stickyColumnClasses}
      />

      <PricingComparisonTableBody>
        <PricingComparisonTableRow className="border-b-[1px]">
          <PricingComparisonTableRowCellHead className={stickyColumnClasses}>
            Prix
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCell>
            <PeriodLabel
              pricePerMonth={nectar.pricePerMonth}
              pricePerYear={nectar.pricePerYear}
              isPerYear={isToggled}
            />
            <br />
            <ButtonChosePlan formula="nectar" />
          </PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell>
            <PeriodLabel
              pricePerMonth={propolis.pricePerMonth}
              pricePerYear={propolis.pricePerYear}
              isPerYear={isToggled}
            />
            <br />
            <ButtonChosePlan formula="propolis" />
          </PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell>
            <PeriodLabel
              pricePerMonth={geleeRoyale.pricePerMonth}
              pricePerYear={geleeRoyale.pricePerYear}
              isPerYear={isToggled}
            />
            <br />
            <ButtonChosePlan formula="geleeRoyale" />
          </PricingComparisonTableRowCell>
        </PricingComparisonTableRow>

        <PricingComparisonTableRow>
          <PricingComparisonTableRowCellHead className={stickyColumnClasses}>
            Abeilles préservées
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCell>5.000</PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell>20.000</PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell after="soit une ruche entière">
            40.000
          </PricingComparisonTableRowCell>
        </PricingComparisonTableRow>

        <PricingComparisonTableRow>
          <PricingComparisonTableRowCellHead className={stickyColumnClasses}>
            Fleurs ou arbres plantés
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCell after="1 fleur = 1 abeille heureuse">
            5.000 fleurs plantées
          </PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell after="par an">
            <div className="font-semibold">Formule Nectar +</div>1 arbre
            mellifère planté
          </PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell after="par an">
            <div className="font-semibold">Formule Nectar +</div>4 arbres
            mellifères plantés
          </PricingComparisonTableRowCell>
        </PricingComparisonTableRow>

        <PricingComparisonTableRow>
          <PricingComparisonTableRowCellHead
            className={stickyColumnClasses}
            after="par an"
          >
            Pot de miel de 250g avec étiquette personnalisée
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCell>2</PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell>6</PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell>8</PricingComparisonTableRowCell>
        </PricingComparisonTableRow>

        <PricingComparisonTableRow>
          <PricingComparisonTableRowCellHead className={stickyColumnClasses}>
            Mascotte L'Abeille Viennoise™
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCell after="valeur approximative 20€">
            1
          </PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell after="valeur approximative 40€">
            1
          </PricingComparisonTableRowCell>
          <PricingComparisonTableRowCell after="celles des formules précédentes">
            2
          </PricingComparisonTableRowCell>
        </PricingComparisonTableRow>

        <PricingComparisonTableRow>
          <PricingComparisonTableRowCellHead className={stickyColumnClasses}>
            Des nouvelles des abeilles accompagnées de photos pour suivre
            l'évolution des ruches
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCellCheck />
          <PricingComparisonTableRowCellCheck />
          <PricingComparisonTableRowCellCheck />
        </PricingComparisonTableRow>

        <PricingComparisonTableRow>
          <PricingComparisonTableRowCellHead
            className={stickyColumnClasses}
            after="par an"
          >
            Coffret gourmand surprise
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCellMinus />
          <PricingComparisonTableRowCellCheck />
          <PricingComparisonTableRowCellCheck />
        </PricingComparisonTableRow>

        <PricingComparisonTableRow>
          <PricingComparisonTableRowCellHead className={stickyColumnClasses}>
            Plaque nominative sur votre ruche
          </PricingComparisonTableRowCellHead>
          <PricingComparisonTableRowCellMinus />
          <PricingComparisonTableRowCellMinus />
          <PricingComparisonTableRowCellCheck />
        </PricingComparisonTableRow>
      </PricingComparisonTableBody>
    </table>
  )
}

const PricingComparisonTableRowCellCheck = () => (
  <PricingComparisonTableRowCell>
    <IconCheck />
  </PricingComparisonTableRowCell>
)
const PricingComparisonTableRowCellMinus = () => (
  <PricingComparisonTableRowCell className="text-red-500 font-black">
    ─
  </PricingComparisonTableRowCell>
)
