import type { HTMLProps } from 'react'
import { AppLinkButton } from '@/modules/shared/link/app-link-button'
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
    <AppLinkButton to={to} variant="fancy" className="mt-4">
      Prendre contact
    </AppLinkButton>
  )
}
