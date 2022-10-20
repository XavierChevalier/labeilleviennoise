export interface Props extends React.HTMLProps<HTMLInputElement> {}

export default function AppInput(props: Props) {
  const { className: propsClasses, ...attributes } = props
  const baseClasses =
    'block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
  const classes = baseClasses.concat(' ', propsClasses || '')

  return <input className={classes} {...attributes} />
}
