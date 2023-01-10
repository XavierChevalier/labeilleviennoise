import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { Link } from '@labeilleviennoise/router'
import type { LinkProps } from '@remix-run/react'

export default function FooterLink({
  children,
  className,
  ...attributes
}: LinkProps) {
  return (
    <Link
      {...attributes}
      prefetch="none"
      className={mergeClasses('hover:underline', className)}
    >
      {children}
    </Link>
  )
}
