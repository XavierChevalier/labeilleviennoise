import type { LinkProps } from '@remix-run/react'
import { Link } from '@remix-run/react'
import type { FC, HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

const buildAppLinkClasses = (className?: string) =>
  mergeClasses(
    'relative font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline',
    className
  )

interface AppLinkProps extends LinkProps {}
const AppLink: FC<AppLinkProps> = ({ children, className, ...attributes }) => (
  <Link className={buildAppLinkClasses(className)} {...attributes}>
    {children}
  </Link>
)

interface AppLinkExternalProps extends HTMLProps<HTMLAnchorElement> {}
const AppLinkExternal: FC<AppLinkExternalProps> = ({
  children,
  className,
  ...attributes
}) => (
  <a className={buildAppLinkClasses(className)} {...attributes}>
    {children}
  </a>
)

export { AppLink, AppLinkExternal }
