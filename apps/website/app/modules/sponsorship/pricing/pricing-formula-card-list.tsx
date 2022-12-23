import type { FC, HTMLProps } from 'react'

const PricingFormulaCardList: FC<HTMLProps<HTMLElement>> = ({ children }) => (
  <ul className="mb-8 space-y-4 text-left">{children}</ul>
)

export default PricingFormulaCardList
