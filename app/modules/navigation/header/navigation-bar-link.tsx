import type { NavLinkProps } from '@remix-run/react'
import { NavLink } from '@remix-run/react/dist/components'
import type { FC, HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

interface NavigationBarLinkProps extends NavLinkProps {}

const NavigationBarLink: FC<NavigationBarLinkProps> = ({
  children,
  className,
  ...attributes
}) => (
  <NavLink {...attributes} prefetch="none">
    {({ isActive }) => (
      <NavigationBarLinkBase
        className={
          typeof className === 'function' ? className({ isActive }) : className
        }
        isActive={isActive}
      >
        {typeof children === 'function' ? children({ isActive }) : children}
      </NavigationBarLinkBase>
    )}
  </NavLink>
)
export default NavigationBarLink

interface NavigationBarLinkBaseProps extends HTMLProps<HTMLDivElement> {
  isActive?: boolean
}

export const NavigationBarLinkBase: FC<NavigationBarLinkBaseProps> = ({
  children,
  className,
  isActive = false,
  ...attributes
}) => {
  const defaultClasses =
    'cursor-pointer text-center md:text-left block py-2 pr-4 pl-3 border-b border-amber-100 hover:bg-amber-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0'
  const activeClasses = 'text-amber-600'
  const passiveClasses = 'text-gray-700'

  return (
    <div
      {...attributes}
      className={mergeClasses(
        defaultClasses,
        isActive ? activeClasses : passiveClasses,
        className
      )}
    >
      {children}
    </div>
  )
}
