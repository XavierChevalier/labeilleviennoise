import Logo from '@/modules/shared/logo/logo'
import LogoWithTextHorizontal from '@/modules/shared/logo/logo-with-text-horizontal'

export default function NavigationBarLogo() {
  return (
    <a href="/">
      <Logo className="hidden md:flex lg:hidden" />
      <LogoWithTextHorizontal className="md:hidden lg:flex" />
    </a>
  )
}
