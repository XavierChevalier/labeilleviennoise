import { AppLinkButton } from '@labeilleviennoise/ui'
import type { HTMLProps } from 'react'
import { useURL } from '@/modules/shared/location/use-url'

export interface Props extends HTMLProps<HTMLElement> {
  isToggled: boolean
  formula: FormulaVariant
}

export enum FormulaVariant {
  Nectar = 'Nectar',
  Propolis = 'Propolis',
  GeleeRoyale = 'Gelée Royale',
}

export default function ButtonChosePlan({ isToggled, formula }: Props) {
  const { relativeUrl } = useURL()
  const to = relativeUrl(
    '/contact-parrainage',
    new URLSearchParams({
      title: formula,
      per: !isToggled ? 'mensuel' : 'annuel',
    })
  )

  return (
    <AppLinkButton
      to={to}
      destination="website"
      variant="fancy"
      className="mt-4 whitespace-nowrap"
    >
      Choisir cette formule
    </AppLinkButton>
  )
}
