import { Link } from '@remix-run/react'
import type { RemixLinkProps } from '@remix-run/react/dist/components'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

export interface Props extends RemixLinkProps {}

export default function AppLink(props: Props) {
  const { className: propsClasses, ...attributes } = props

  const baseClasses =
    'font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'

  return (
    <Link className={mergeClasses(baseClasses, propsClasses)} {...attributes}>
      {props.children}
    </Link>
  )
}
