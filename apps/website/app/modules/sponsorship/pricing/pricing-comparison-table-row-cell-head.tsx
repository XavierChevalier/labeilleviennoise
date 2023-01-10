import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLElement> {
  after?: string
}

export default function PricingComparisonTableRowCellHead({
  className,
  children,
  after,
}: Props) {
  return (
    <th className={mergeClasses('px-2 py-3 font-medium', className)}>
      {children}
      {after && <small className="block text-sm text-gray-500">{after}</small>}
    </th>
  )
}
