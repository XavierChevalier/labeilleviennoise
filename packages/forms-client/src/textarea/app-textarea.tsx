import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { forwardRef } from 'react'

export default forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements['textarea']
>(function AppTextarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={mergeClasses(
        'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500',
        className
      )}
      rows={5}
      {...props}
    />
  )
})
