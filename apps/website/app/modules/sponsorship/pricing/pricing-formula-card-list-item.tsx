import { IconCheck } from '@labeilleviennoise/icons'
import type { FC, HTMLProps, ReactNode } from 'react'

interface Props extends HTMLProps<HTMLLIElement> {
  after?: ReactNode
}

const PricingFormulaCardListItem: FC<Props> = ({ children, after }) => (
  <li className="flex items-center space-x-3">
    <IconCheck />
    <span>
      {children}
      {after && <small className="block text-sm text-gray-500">{after}</small>}
    </span>
  </li>
)

export default PricingFormulaCardListItem
