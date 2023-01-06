import { AppSwitch } from '@labeilleviennoise/forms-client'

export interface Props {
  isToggled: boolean
  onToggle: () => void
}

export default function PricingFormulaPerSwitch(props: Props) {
  const { isToggled, onToggle } = props

  return (
    <AppSwitch
      before={<span>Mensuel</span>}
      onChange={onToggle}
      isToggled={isToggled}
    >
      Annuel
    </AppSwitch>
  )
}
