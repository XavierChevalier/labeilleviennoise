import type { FC, HTMLProps } from 'react'
import Logo from './logo'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

const LogoWithTextHorizontal: FC<HTMLProps<HTMLDivElement>> = ({
  className,
}) => (
  <div className={mergeClasses('flex items-center', className)}>
    <Logo />
    <img
      src="/images/logo-text-align-left.svg"
      className="h-[44px] dark:invert"
      alt="Logo"
    />
  </div>
)

export default LogoWithTextHorizontal
