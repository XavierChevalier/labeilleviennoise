export interface Props extends React.HTMLProps<HTMLTextAreaElement> {}

export default function AppTextarea(props: Props) {
  const { className: propsClasses, ...attributes } = props
  const baseClasses =
    'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
  const classes = baseClasses.concat(' ', propsClasses || '')

  return <textarea className={classes} {...attributes}></textarea>
}
