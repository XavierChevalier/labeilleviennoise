import AppSwitch from '@/modules/shared/form/switch/app-switch'

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
