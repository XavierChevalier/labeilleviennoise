import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { useToggle } from '@labeilleviennoise/state-hooks'
import { AppLinkButton } from '@labeilleviennoise/ui'
import NavigationBarLink from '../navigation-bar-link'
import NavigationMenuHamburgerButton from './navigation-menu-hamburger-button'

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
        <ul className="flex flex-col items-stretch md:items-center mt-4 font-medium md:flex-row md:space-x-6 lg:space-x-8 md:mt-0">
          <li>
            <NavigationBarLink
              to="/"
              destination="website"
              onClick={toggleShowMenu}
            >
              Accueil
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink
              to="/le-rucher"
              destination="website"
              onClick={toggleShowMenu}
            >
              Le rucher
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink
              to="/la-miellerie"
              destination="website"
              onClick={toggleShowMenu}
            >
              La miellerie
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink
              to="/equipe"
              destination="website"
              onClick={toggleShowMenu}
            >
              Notre équipe
            </NavigationBarLink>
          </li>
          <li className="md:hidden">
            <NavigationBarLink
              to="/contact"
              destination="website"
              onClick={toggleShowMenu}
            >
              Contactez-nous
            </NavigationBarLink>
          </li>
          <li className="hidden md:block">
            <AppLinkButton
              variant="fancy"
              to="/contact"
              destination="website"
              className="!py-2"
              onClick={toggleShowMenu}
            >
              Contactez-nous
            </AppLinkButton>
          </li>
        </ul>
      </div>
    </>
  )
}
