import Logo from './logo'

export default function LogoWithTextInline() {
  return (
    <div className="flex items-center">
      <Logo />
      <img
        src="/images/logo-text.svg"
        className="h-[44px] dark:invert"
        alt="Logo"
      />
    </div>
  )
}
