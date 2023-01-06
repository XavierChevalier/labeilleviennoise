import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { FC, HTMLProps } from 'react'

const Logo: FC<HTMLProps<HTMLElement>> = ({ className }) => (
  <img
    src="https://ik.imagekit.io/labeilleviennoise/images/logo/logo.svg"
    alt="Logo"
    className={mergeClasses('h-[64px] w-[64px]', className)}
  />
)

export default Logo
