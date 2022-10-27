import AppSwitch from '../shared/form/switch/AppSwitch'

export interface Props {
  isToggled: boolean
  onToggle: () => void
}

export default function PricingFormulaPerSwitch(props: Props) {
  const { isToggled, onToggle } = props
  const before = () => <span>Mensuel</span>
  return (
    <AppSwitch
      id="pricing-per-switch"
      before={before()}
      onChange={onToggle}
      isToggled={isToggled}
    >
      Annuel
    </AppSwitch>
  )
}
