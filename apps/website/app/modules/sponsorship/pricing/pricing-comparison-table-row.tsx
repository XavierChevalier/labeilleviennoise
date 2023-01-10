import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLElement> {}

export default function PricingComparisonTableRow({
  className,
  children,
}: Props) {
  return (
    <tr className={mergeClasses('even:bg-gray-100/25', className)}>
      {children}
    </tr>
  )
}
