import { mergeClasses } from '@/modules/shared/html/merge-classes'

export interface Props extends React.HTMLProps<HTMLLabelElement> {}

export default function AppLabel({
  className,
  ...props
}: React.HTMLProps<HTMLLabelElement>) {
  return (
    <label
      className={mergeClasses(
        'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300',
        className
      )}
      {...props}
    >
      {props.children}
    </label>
  )
}
