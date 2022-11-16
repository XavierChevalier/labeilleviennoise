import type { HTMLProps } from 'react'

export default function PricingFormulaCardList(props: HTMLProps<HTMLElement>) {
  return <ul className="mb-8 space-y-4 text-left">{props.children}</ul>
}
