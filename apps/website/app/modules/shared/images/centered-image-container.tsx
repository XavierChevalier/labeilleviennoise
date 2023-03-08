import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { FC, HTMLProps } from 'react'

const CenteredImageContainer: FC<HTMLProps<HTMLElement>> = ({
  children,
  className,
}) => (
  <div
    className={mergeClasses(
      'flex flex-col justify-center items-center w-full',
      className
    )}
  >
    {children}
  </div>
)

export default CenteredImageContainer
