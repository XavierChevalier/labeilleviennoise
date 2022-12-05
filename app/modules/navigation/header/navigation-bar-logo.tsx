import { AppLink } from '@/modules/shared/link/app-link'
import Logo from '@/modules/shared/logo/logo'
import LogoWithTextHorizontal from '@/modules/shared/logo/logo-with-text-horizontal'

export default function NavigationBarLogo() {
  return (
    <AppLink to="/">
      <Logo className="hidden md:flex lg:hidden" />
      <LogoWithTextHorizontal className="md:hidden lg:flex" />
    </AppLink>
  )
}
