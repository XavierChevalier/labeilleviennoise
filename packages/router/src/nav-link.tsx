import type { NavLinkProps as RemixNavLinkProps } from '@remix-run/react'
import { NavLink as RemixNavLink } from '@remix-run/react'
import type { FC } from 'react'
import type { Tenant } from './multi-tenant'
import {
  getFullUrlFromPathname,
  isSameDestinationAsCurrentWebsite,
} from './multi-tenant'

export interface NavLinkProps extends RemixNavLinkProps {
  destination?: Tenant
}

export const NavLink: FC<NavLinkProps> = ({
  className,
  children,
  to,
  destination = 'website',
  ...attributes
}) => {
  if (isSameDestinationAsCurrentWebsite(destination)) {
    return (
      <RemixNavLink {...attributes} to={to}>
        {children}
      </RemixNavLink>
    )
  }

  return (
    <a
      href={getFullUrlFromPathname(to.toString(), destination)}
      className={
        typeof className === 'function'
          ? className({ isActive: false, isPending: false })
          : className
      }
    >
      {typeof children === 'function'
        ? children({ isActive: false, isPending: true })
        : children}
    </a>
  )
}
