import { useState } from 'react'
import PricingComparisonFormulaCards from '@/modules/sponsorship/pricing/pricing-comparison-formula-cards'
import PricingComparisonTable from '@/modules/sponsorship/pricing/pricing-comparison-table'
import PricingFormulaPerSwitch from '@/modules/sponsorship/pricing/pricing-formula-per-switch'

export interface Formula {
  title: string
  pricePerMonth: number
  pricePerYear: number
}

export interface Formulas {
  nectar: Formula
  propolis: Formula
  geleeRoyale: Formula
}

export default function PricingComparison() {
  const [isToggled, setIsToggled] = useState(false)
  const handleIsToggled = () => setIsToggled((prevState) => !prevState)

  const formulas: Formulas = {
    nectar: {
      title: 'Nectar',
      pricePerMonth: 9.99,
      pricePerYear: 119.99,
    },
    propolis: {
      title: 'Propolis',
      pricePerMonth: 29.99,
      pricePerYear: 359.99,
    },
    geleeRoyale: {
      title: 'Gelée Royale',
      pricePerMonth: 59.99,
      pricePerYear: 719.99,
    },
  }
  return (
    <>
      <div className="flex justify-center mb-5">
        <PricingFormulaPerSwitch
          isToggled={isToggled}
          onToggle={handleIsToggled}
        />
      </div>
      <PricingComparisonFormulaCards
        isToggled={isToggled}
        formulas={formulas}
        className="sm:hidden"
      />
      <PricingComparisonTable
        isToggled={isToggled}
        formulas={formulas}
        className="hidden sm:table"
      />
    </>
  )
}
