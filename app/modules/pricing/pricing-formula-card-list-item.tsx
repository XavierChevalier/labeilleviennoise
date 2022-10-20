import IconCheck from '../shared/icons/icon-check'

export default function PricingFormulaCardListItem(
  props: React.HTMLProps<HTMLElement>
) {
  return (
    <li className="flex items-center space-x-3">
      <IconCheck />
      <span>{props.children}</span>
    </li>
  )
}
