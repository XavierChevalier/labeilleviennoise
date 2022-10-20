import NavigationBarLink from '../navigation-bar-link'
import NavigationMenuHamburgerButton from './navigation-menu-hamburger-button'

export default function NavigationMenu() {
  return (
    <>
      <div className="flex items-center">
        <NavigationMenuHamburgerButton />
      </div>
      <div
        id="mega-menu"
        className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-2"
      >
        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <NavigationBarLink to="/">Accueil</NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/boutique" title="Bientôt disponible">
              Boutique
            </NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/parrainage">Parrainage</NavigationBarLink>
          </li>
          <li>
            <NavigationBarLink to="/contact">Contact</NavigationBarLink>
          </li>
        </ul>
      </div>
    </>
  )
}
