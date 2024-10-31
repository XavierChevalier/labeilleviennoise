import type { LinkProps as RemixLinkProps } from '@remix-run/react'
import { Link as RemixLink } from '@remix-run/react'
import type { FC } from 'react'
import type { Tenant } from './multi-tenant'
import {
  getFullUrlFromPathname,
  isSameDestinationAsCurrentWebsite,
} from './multi-tenant'

export interface OnlyAdditionalLinkProps {
  destination: Tenant
}

export interface LinkProps extends OnlyAdditionalLinkProps, RemixLinkProps {}

const isEmailLink = (to: LinkProps['to']) => to.toString().startsWith('mailto:')
const isExternalLink = (to: LinkProps['to'], destination: Tenant) =>
  isEmailLink(to) || !isSameDestinationAsCurrentWebsite(destination)

export const Link: FC<LinkProps> = ({
  children,
  to,
  destination,
  ...attributes
}) => {
  if (isExternalLink(to, destination)) {
    return (
      <a
        {...attributes}
        href={getFullUrlFromPathname(to.toString(), destination)}
      >
        {children}
      </a>
    )
  }

  return (
    <RemixLink {...attributes} to={to}>
      {children}
    </RemixLink>
  )
}
