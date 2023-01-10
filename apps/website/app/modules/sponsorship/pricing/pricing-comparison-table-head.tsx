import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { HTMLProps } from 'react'
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
        <th
          className={mergeClasses(
            'pb-3 font-medium w-[140px] md:w-[226px]',
            firstColumnClassName
          )}
        >
          Formule
        </th>
        <th className="pb-3 font-medium">{nectar.title}</th>
        <th className="pb-3 font-medium">{propolis.title}</th>
        <th className="pb-3 font-medium">{geleeRoyale.title}</th>
      </tr>
    </thead>
  )
}
