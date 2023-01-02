import { AppLink } from '@/shared/link/app-link'
import Logo from '@/shared/logo/logo'
import LogoWithTextHorizontal from '@/shared/logo/logo-with-text-horizontal'

export default function NavigationBarLogo() {
  return (
    // TODO: use AppLinkExternal if the base URL is not labeilleviennoise.com
    <AppLink to="/">
      <Logo className="hidden md:flex lg:hidden" />
      <LogoWithTextHorizontal className="md:hidden lg:flex" />
    </AppLink>
  )
}
