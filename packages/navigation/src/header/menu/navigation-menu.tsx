import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { useToggle } from '@labeilleviennoise/state-hooks'
import { AppLinkButton } from '@labeilleviennoise/ui'
import { Dropdown } from 'flowbite-react'
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
              to="/"
              destination="shop"
              title="Bientôt disponible"
              onClick={toggleShowMenu}
            >
              Boutique
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink
              to="/parrainage"
              destination="website"
              onClick={toggleShowMenu}
            >
              Parrainage
            </NavigationBarLink>
          </li>
          <li className="flex items-center justify-center h-14 border-b md:border-none border-amber-100 text-gray-700">
            <Dropdown label="Le projet" inline>
              <Dropdown.Item>
                <NavigationBarLink
                  to="/le-rucher"
                  destination="website"
                  onClick={toggleShowMenu}
                >
                  Le rucher
                </NavigationBarLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavigationBarLink
                  to="/la-miellerie"
                  destination="website"
                  onClick={toggleShowMenu}
                >
                  La miellerie
                </NavigationBarLink>
              </Dropdown.Item>
            </Dropdown>
          </li>
          <li>
            <NavigationBarLink
              to="/"
              destination="blog"
              onClick={toggleShowMenu}
            >
              Blog
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink
              to="/pages/contact"
              destination="shop"
              onClick={toggleShowMenu}
            >
              Contact
            </NavigationBarLink>
          </li>
          <li className="hidden md:block">
            <AppLinkButton
              variant="fancy"
              to="/parrainage"
              destination="website"
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
