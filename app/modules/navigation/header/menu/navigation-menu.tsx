import { Dropdown } from 'flowbite-react'
import NavigationMenuHamburgerButton from '@/modules/navigation/header/menu/navigation-menu-hamburger-button'
import NavigationBarLink from '@/modules/navigation/header/navigation-bar-link'
import { mergeClasses } from '@/modules/shared/html/merge-classes'
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
            <Dropdown label="Le projet" inline={true}>
              <Dropdown.Item>
                <NavigationBarLink to="/le-rucher" onClick={toggleShowMenu}>
                  Le rucher
                </NavigationBarLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavigationBarLink to="/la-miellerie" onClick={toggleShowMenu}>
                  La miellerie
                </NavigationBarLink>
              </Dropdown.Item>
            </Dropdown>
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
