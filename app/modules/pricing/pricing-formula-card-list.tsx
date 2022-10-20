import React from 'react'

export default function PricingFormulaCardList(
  props: React.HTMLProps<HTMLElement>
) {
  return <ul className="mb-8 space-y-4 text-left">{props.children}</ul>
}
