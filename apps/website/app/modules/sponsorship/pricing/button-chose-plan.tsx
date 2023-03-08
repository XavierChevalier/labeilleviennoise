import { AppLinkButton } from '@labeilleviennoise/ui'
import type { HTMLProps } from 'react'
import { useURL } from '@/modules/shared/location/use-url'

export interface Props extends HTMLProps<HTMLElement> {
  formula: keyof typeof FormulaShopVariant
}

enum FormulaShopVariant {
  nectar = '44074998038796',
  propolis = '44074998071564',
  geleeRoyale = '44074998104332',
}

export default function ButtonChosePlan({ formula }: Props) {
  const { relativeUrl } = useURL()
  const to = relativeUrl(
    '/products/parrainage',
    new URLSearchParams({ variant: FormulaShopVariant[formula] })
  )

  return (
    <AppLinkButton
      to={to}
      destination="shop"
      variant="fancy"
      className="mt-4 whitespace-nowrap"
    >
      Choisir cette formule
    </AppLinkButton>
  )
}
