/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

const AppInput = forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
  ({ type = 'text', className, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={mergeClasses(
        'block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500',
        className
      )}
      {...props}
    />
  )
)

export default AppInput
