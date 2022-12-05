import type { NavLinkProps } from '@remix-run/react'
import { NavLink } from '@remix-run/react/dist/components'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

export default function NavigationBarLink({
  children,
  ...attributes
}: NavLinkProps) {
  const defaultClasses =
    'block py-2 pr-4 pl-3 border-b border-amber-100 hover:bg-amber-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0 md:dark:hover:text-amber-500 dark:hover:bg-gray-700 dark:hover:text-amber-500 md:dark:hover:bg-transparent dark:border-gray-700'
  const activeClasses = 'text-amber-600 dark:text-amber-500'
  const passiveClasses = 'text-gray-700 dark:text-gray-400'

  return (
    <NavLink
      {...attributes}
      prefetch="none"
      className={({ isActive }) =>
        mergeClasses(defaultClasses, isActive ? activeClasses : passiveClasses)
      }
    >
      {children}
    </NavLink>
  )
}
