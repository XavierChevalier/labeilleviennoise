import { AppLinkButton } from '@labeilleviennoise/ui'
import type { HTMLProps } from 'react'
import { useURL } from '@/modules/shared/location/use-url'

export interface Props extends HTMLProps<HTMLElement> {
  title: string
  isToggled: boolean
}

export default function ButtonChosePlan({ title, isToggled }: Props) {
  const { relativeUrl } = useURL()
  const to = relativeUrl(
    '/contact-parrainage',
    new URLSearchParams({
      per: !isToggled ? 'mensuel' : 'annuel',
      title,
    })
  )

  return (
    <AppLinkButton
      to={to}
      destination="website"
      variant="fancy"
      className="mt-4"
    >
      Prendre contact
    </AppLinkButton>
  )
}
