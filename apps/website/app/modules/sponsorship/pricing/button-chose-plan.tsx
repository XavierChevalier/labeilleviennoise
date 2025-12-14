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
  const { mailto } = useURL()
  const to = mailto(
    'labeilleviennoise@gmail.com',
    `Bonjour, je souhaite devenir parrain ${
      !isToggled ? 'mensuel' : 'annuel'
    } grâce à la formule ${formula}.`
  )

  return (
    <AppLinkButton
      to={to}
      destination="website"
      variant="fancy"
      className="mt-4 whitespace-nowrap"
      data-umami-event={`parrainage:cta:choisir-formule:${formula
        .toLowerCase()
        .replace(/\s+/g, '-')}`}
    >
      Choisir cette formule
    </AppLinkButton>
  )
}
