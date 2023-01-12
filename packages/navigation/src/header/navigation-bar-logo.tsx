import { Logo, LogoWithTextHorizontal } from '@labeilleviennoise/logo'
import { NavLink } from '@labeilleviennoise/router'

export default function NavigationBarLogo() {
  return (
    <NavLink to="/" destination="website">
      <Logo className="hidden md:flex lg:hidden" />
      <LogoWithTextHorizontal className="md:hidden lg:flex" />
    </NavLink>
  )
}
