export interface Props extends React.HTMLProps<HTMLAnchorElement> {
  type?: 'primary'
}

export default function AppButton(props: Props) {
  const { type, className: propsClasses, ...attributes } = props

  const baseClasses =
    'inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg focus:ring-4'
  const defaultClasses =
    'text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
  const primaryClasses =
    'text-white bg-primary hover:bg-primary-500 focus:ring-primary-300 dark:focus:ring-primary-900'
  const classes = baseClasses
    .concat(' ', propsClasses || '')
    .concat(' ', type === 'primary' ? primaryClasses : defaultClasses)
  return (
    <a className={classes} {...attributes}>
      {props.children}
    </a>
  )
}
