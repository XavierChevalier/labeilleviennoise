import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { FC, HTMLProps } from 'react'
import Logo from './logo'

const LogoWithTextVertical: FC<HTMLProps<HTMLDivElement>> = (props) => (
  <div className={mergeClasses('flex flex-col items-center', props.className)}>
    <Logo />
    <img
      src="https://ik.imagekit.io/labeilleviennoise/images/logo/logo-text-align-center.svg"
      className="h-[44px]"
      alt="Logo"
    />
  </div>
)

export default LogoWithTextVertical
