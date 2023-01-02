import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { LinkProps } from '@remix-run/react'
import { Link } from '@remix-run/react'
import type { FC, HTMLProps } from 'react'

const buildAppLinkClasses = (className?: string) =>
  mergeClasses(
    'relative font-medium underline text-primary-600 hover:no-underline',
    className
  )

interface AppLinkProps extends LinkProps {}
export const AppLink: FC<AppLinkProps> = ({
  children,
  className,
  ...attributes
}) => (
  <Link className={buildAppLinkClasses(className)} {...attributes}>
    {children}
  </Link>
)

interface AppLinkExternalProps extends HTMLProps<HTMLAnchorElement> {}
export const AppLinkExternal: FC<AppLinkExternalProps> = ({
  children,
  className,
  ...attributes
}) => (
  <a className={buildAppLinkClasses(className)} {...attributes}>
    {children}
  </a>
)
