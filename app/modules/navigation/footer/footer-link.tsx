import type { LinkProps } from '@remix-run/react'
import { Link } from '@remix-run/react'

export default function FooterLink(props: LinkProps) {
  const baseClasses = 'hover:underline'
  const classes = baseClasses.concat(' ', props.className || '')
  return (
    <Link {...props} prefetch="none" className={classes}>
      {props.children}
    </Link>
  )
}
