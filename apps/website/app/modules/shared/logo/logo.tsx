import type { FC, HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

const Logo: FC<HTMLProps<HTMLElement>> = ({ className }) => (
  <img
    src="/images/logo.svg"
    alt="logo"
    className={mergeClasses('h-[64px] w-[64px]', className)}
  />
)

export default Logo
