import type { HTMLProps } from 'react'
import AppLink from '@/modules/shared/link/app-link'
import { useURL } from '@/modules/shared/location/use-url'

export interface Props extends HTMLProps<HTMLElement> {
  title: string
  isToggled: boolean
}

export default function ButtonChosePlan(props: Props) {
  const { title, isToggled } = props
  const { createUrl } = useURL()
  const to = createUrl('/contact-parrainage')
  to.searchParams.set('per', !isToggled ? 'mensuel' : 'annuel')
  to.searchParams.set('title', title)

  return (
    <AppLink
      to={to}
      type="fancy"
      className="inline-flex items-center justify-center px-5 py-3 mt-3 w-3/4 font-medium text-center rounded-lg focus:ring-4 no-underline text-white bg-primary hover:bg-primary-500 focus:ring-primary-300 dark:focus:ring-primary-900"
    >
      Prendre contact
    </AppLink>
  )
}
