import AppSwitch from '../shared/form/switch/AppSwitch'

export default function PricingFormulaPerSwitch() {
  const before = () => <span>Mensuel</span>
  return (
    <AppSwitch id="pricing-per-switch" before={before()}>
      Annuel
    </AppSwitch>
  )
}
