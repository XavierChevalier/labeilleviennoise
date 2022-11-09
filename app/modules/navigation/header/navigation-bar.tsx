import NavigationMenu from './menu/navigation-menu'
import NavigationBarLogo from './navigation-bar-logo'

export default function navigationBar() {
  return (
    <nav className="px-2 md:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NavigationBarLogo />
        <NavigationMenu />
      </div>
    </nav>
  )
}
