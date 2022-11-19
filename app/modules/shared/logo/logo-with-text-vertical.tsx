import type { FC, HTMLProps } from 'react'
import Logo from './logo'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

const LogoWithTextVertical: FC<HTMLProps<HTMLDivElement>> = (props) => (
  <div className={mergeClasses('flex flex-col items-center', props.className)}>
    <Logo />
    <img
      src="/images/logo-text-align-center.svg"
      className="h-[44px] dark:invert"
      alt="Logo"
    />
  </div>
)

export default LogoWithTextVertical
