import type { HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

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
