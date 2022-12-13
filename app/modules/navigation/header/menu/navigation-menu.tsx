import type { FC } from 'react'
import { useLocation } from 'react-router'
import NavigationMenuHamburgerButton from '@/modules/navigation/header/menu/navigation-menu-hamburger-button'
import NavigationBarLink, {
  NavigationBarLinkBase,
} from '@/modules/navigation/header/navigation-bar-link'
import type { NavigationBarLinkDropdownProps } from '@/modules/navigation/header/navigation-bar-link-dropdown'
import NavigationBarLinkDropdown from '@/modules/navigation/header/navigation-bar-link-dropdown'
import { mergeClasses } from '@/modules/shared/html/merge-classes'
import IconChevronDown from '@/modules/shared/icons/icon-chevron-down'
import { AppLinkButton } from '@/modules/shared/link/app-link-button'
import { useToggle } from '@/modules/shared/states/use-toggle'

export default function NavigationMenu() {
  const [showMenu, toggleShowMenu] = useToggle(false)

  return (
    <>
      <div className="flex items-center">
        <NavigationMenuHamburgerButton onClick={toggleShowMenu} />
      </div>

      <div
        id="mega-menu"
        className={mergeClasses(
          'justify-between items-center w-full text-sm md:flex md:w-auto md:order-2',
          !showMenu && 'hidden'
        )}
      >
        <ul className="flex flex-col items-center mt-4 font-medium md:flex-row md:space-x-6 lg:space-x-8 md:mt-0">
          <li>
            <NavigationBarLink to="/" onClick={toggleShowMenu}>
              Accueil
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink
              to="/boutique"
              title="Bientôt disponible"
              onClick={toggleShowMenu}
            >
              Boutique
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/parrainage" onClick={toggleShowMenu}>
              Parrainage
            </NavigationBarLink>
          </li>
          <li>
            <ProjectDropdown onClick={toggleShowMenu} />
          </li>
          <li>
            <NavigationBarLink to="/blog" onClick={toggleShowMenu}>
              Blog
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/contact" onClick={toggleShowMenu}>
              Contact
            </NavigationBarLink>
          </li>
          <li className="hidden md:block">
            <AppLinkButton
              variant="fancy"
              to="/parrainage"
              className="!py-2"
              onClick={toggleShowMenu}
            >
              Devenez parrain
            </AppLinkButton>
          </li>
        </ul>
      </div>
    </>
  )
}

const ProjectDropdown: FC<
  Omit<NavigationBarLinkDropdownProps, 'triggerElement'>
> = ({ ...attributes }) => {
  const location = useLocation()

  return (
    <NavigationBarLinkDropdown
      {...attributes}
      triggerElement={
        <NavigationBarLinkBase
          isActive={['/le-rucher', '/la-miellerie'].includes(location.pathname)}
        >
          <span className="flex items-center">
            Le projet
            <IconChevronDown />
          </span>
        </NavigationBarLinkBase>
      }
    >
      <ul>
        <li>
          <NavigationBarLink to="/le-rucher" className="md:p-4">
            Le rucher
          </NavigationBarLink>
        </li>
        <li>
          <NavigationBarLink to="/la-miellerie" className="md:p-4">
            La miellerie
          </NavigationBarLink>
        </li>
      </ul>
    </NavigationBarLinkDropdown>
  )
}
