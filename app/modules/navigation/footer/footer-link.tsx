import type { LinkProps } from '@remix-run/react'
import { Link } from '@remix-run/react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

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
