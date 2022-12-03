import NavigationMenu from './menu/navigation-menu'
import NavigationBarLogo from './navigation-bar-logo'

export default function NavigationBar() {
  return (
    <nav className="px-2 md:px-4 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NavigationBarLogo />
        <NavigationMenu />
      </div>
    </nav>
  )
}
