import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { forwardRef } from 'react'

export default forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
  function AppInput({ type = 'text', className, ...props }, ref) {
    return (
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
  }
)
