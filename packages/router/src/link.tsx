import type { LinkProps as RemixLinkProps } from '@remix-run/react'
import { Link as RemixLink } from '@remix-run/react'
import type { FC } from 'react'
import type { Tenant } from './multi-tenant'
import {
  getFullUrlFromPathname,
  isSameDestinationAsCurrentWebsite,
} from './multi-tenant'

export interface LinkProps extends RemixLinkProps {
  destination?: Tenant
}

export const Link: FC<LinkProps> = ({
  children,
  to,
  destination = 'website',
  ...attributes
}) => {
  if (isSameDestinationAsCurrentWebsite(destination)) {
    return (
      <RemixLink {...attributes} to={to}>
        {children}
      </RemixLink>
    )
  }

  return (
    <a
      {...attributes}
      href={getFullUrlFromPathname(to.toString(), destination)}
    >
      {children}
    </a>
  )
}
