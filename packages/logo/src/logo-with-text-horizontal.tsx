import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { FC, HTMLProps } from 'react'
import Logo from './logo'

const LogoWithTextHorizontal: FC<HTMLProps<HTMLDivElement>> = ({
  className,
}) => (
  <div className={mergeClasses('flex items-center', className)}>
    <Logo />
    <img
      src="https://ik.imagekit.io/labeilleviennoise/images/logo/logo-text-align-left.svg"
      className="h-[44px]"
      alt="Logo"
    />
  </div>
)

export default LogoWithTextHorizontal
