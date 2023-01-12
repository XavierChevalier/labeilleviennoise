import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { LinkProps } from '@labeilleviennoise/router'
import { Link } from '@labeilleviennoise/router'

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
