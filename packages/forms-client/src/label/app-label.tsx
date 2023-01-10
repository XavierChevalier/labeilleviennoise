import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { HTMLProps } from 'react'

export interface Props extends HTMLProps<HTMLLabelElement> {}

export default function AppLabel({
  className,
  ...props
}: HTMLProps<HTMLLabelElement>) {
  return (
    <label
      className={mergeClasses(
        'block mb-2 text-sm font-medium text-gray-900',
        className
      )}
      {...props}
    >
      {props.children}
    </label>
  )
}
