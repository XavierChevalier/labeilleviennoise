import type { HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'
import type { Formulas } from '@/modules/sponsorship/pricing/pricing-comparison'

export interface Props extends HTMLProps<HTMLElement> {
  formulas: Formulas
  firstColumnClassName?: string
}

export default function PricingComparisonTableHead({
  formulas: { nectar, propolis, geleeRoyale },
  firstColumnClassName,
}: Props) {
  return (
    <thead className="border-b-[1px]">
      <tr className="text-left text-2xl">
        <th className={mergeClasses('pb-3 font-medium', firstColumnClassName)}>
          Formule
        </th>
        <th className="pb-3 min-w-[226px] font-medium">{nectar.title}</th>
        <th className="pb-3 min-w-[226px] font-medium">{propolis.title}</th>
        <th className="pb-3 min-w-[226px] font-medium">{geleeRoyale.title}</th>
      </tr>
    </thead>
  )
}
