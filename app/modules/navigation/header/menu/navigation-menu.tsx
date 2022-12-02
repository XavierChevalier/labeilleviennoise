import { useState } from 'react'
import NavigationBarLink from '../navigation-bar-link'
import NavigationMenuHamburgerButton from './navigation-menu-hamburger-button'
import AppButton from '@/modules/shared/button/app-button'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

export default function NavigationMenu() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  return (
    <>
      <div className="flex items-center">
        <NavigationMenuHamburgerButton onClick={handleShowMenu} />
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
            <NavigationBarLink to="/" onClick={handleShowMenu}>
              Accueil
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink
              to="/boutique"
              title="Bientôt disponible"
              onClick={handleShowMenu}
            >
              Boutique
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/parrainage" onClick={handleShowMenu}>
              Parrainage
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/le-rucher" onClick={handleShowMenu}>
              Le rucher
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/la-miellerie" onClick={handleShowMenu}>
              La miellerie
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/contact" onClick={handleShowMenu}>
              Contact
            </NavigationBarLink>
          </li>
          <li className="hidden md:block">
            <AppButton
              type="fancy"
              href="/parrainage#pricing"
              className="!py-2"
              onClick={handleShowMenu}
            >
              Devenez parrain
            </AppButton>
          </li>
        </ul>
      </div>
    </>
  )
}
