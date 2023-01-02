import type { NavLinkProps as RemixNavLinkProps } from '@remix-run/react'
import { NavLink as RemixNavLink } from '@remix-run/react'
import type { FC } from 'react'
import { useRouterContext } from './router-context'

export interface NavLinkProps extends RemixNavLinkProps {
  website?: 'website' | 'blog' | 'auth'
}

export const NavLink: FC<NavLinkProps> = ({
  className,
  children,
  to,
  website = 'website',
  ...attributes
}) => {
  const { currentBaseUrl, baseUrlWebsite, baseUrlBlog, baseUrlAuth } =
    useRouterContext()
  if (
    (currentBaseUrl === baseUrlWebsite && website === 'website') ||
    (currentBaseUrl === baseUrlBlog && website === 'blog') ||
    (currentBaseUrl === baseUrlAuth && website === 'auth')
  ) {
    return (
      <RemixNavLink {...attributes} to={to}>
        {children}
      </RemixNavLink>
    )
  }

  const href = (to: string) => {
    switch (website) {
      case 'website':
        return `${baseUrlWebsite}${to}`
      case 'blog':
        return `${baseUrlBlog}${to}`
      case 'auth':
        return `${baseUrlAuth}${to}`
    }
  }

  return (
    <a
      href={href(to.toString())}
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
