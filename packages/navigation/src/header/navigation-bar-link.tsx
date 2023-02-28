import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { NavLinkProps } from '@labeilleviennoise/router'
import { NavLink } from '@labeilleviennoise/router'
import type { FC, HTMLProps } from 'react'

const NavigationBarLink: FC<NavLinkProps> = ({
  children,
  className,
  ...attributes
}) => (
  <NavLink {...attributes}>
    {({ isActive, isPending }) => (
      <NavigationBarLinkBase
        className={
          typeof className === 'function'
            ? className({ isActive, isPending })
            : className
        }
        isActive={isActive}
      >
        {typeof children === 'function'
          ? children({ isActive, isPending })
          : children}
      </NavigationBarLinkBase>
    )}
  </NavLink>
)
export default NavigationBarLink

interface NavigationBarLinkBaseProps extends HTMLProps<HTMLDivElement> {
  isActive?: boolean
  isPending?: boolean
}

const NavigationBarLinkBase: FC<NavigationBarLinkBaseProps> = ({
  children,
  className,
  isActive = false,
  ...attributes
}) => {
  const defaultClasses =
    'cursor-pointer text-center md:text-left block p-4 border-b border-amber-100 hover:bg-amber-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0'
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
