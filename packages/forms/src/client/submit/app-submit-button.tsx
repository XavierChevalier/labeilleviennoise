import { mergeClasses } from '@labeilleviennoise/merge-classes'

export default function SubmitButton({
  className,
  ...props
}: JSX.IntrinsicElements['button']) {
  const baseClasses =
    'inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg focus:ring-4'
  const primaryClasses =
    'text-white bg-primary hover:bg-primary-500 focus:ring-primary-300'

  return (
    <div className="mx-auto">
      <button
        className={mergeClasses(baseClasses, primaryClasses, className)}
        {...props}
      >
        {props.children === 'OK' ? 'Soumettre' : props.children}
      </button>
    </div>
  )
}
