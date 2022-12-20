import type { ButtonHTMLAttributes, FC } from 'react'
import NavigationMenuHamburgerIcon from './navigation-menu-hamburger-icon'

const NavigationMenuHamburgerButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => (
  <button
    {...props}
    data-collapse-toggle="mega-menu"
    type="button"
    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    aria-controls="mega-menu"
    aria-expanded="false"
  >
    <span className="sr-only">Ouvrir menu principal</span>
    <NavigationMenuHamburgerIcon />
  </button>
)

export default NavigationMenuHamburgerButton
