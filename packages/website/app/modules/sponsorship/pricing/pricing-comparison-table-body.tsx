import type { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLElement> {}

export default function PricingComparisonTableBody({ children }: Props) {
  return <tbody>{children}</tbody>
}
