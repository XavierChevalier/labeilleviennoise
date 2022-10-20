import NavigationMenuHamburgerIcon from './navigation-menu-hamburger-icon'

export default function NavigationMenuHamburgerButton() {
  return (
    <button
      data-collapse-toggle="mega-menu"
      type="button"
      className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="mega-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Ouvrir menu principal</span>
      <NavigationMenuHamburgerIcon />
    </button>
  )
}
