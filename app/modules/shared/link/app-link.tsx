import { Link } from '@remix-run/react'
import type { RemixLinkProps } from '@remix-run/react/dist/components'

export interface Props extends RemixLinkProps {}

export default function AppLink(props: Props) {
  const { className: propsClasses, ...attributes } = props

  const baseClasses =
    'font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
  const classes = baseClasses.concat(' ', propsClasses || '')

  return (
    <Link className={classes} {...attributes}>
      {props.children}
    </Link>
  )
}
