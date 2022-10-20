export interface Props extends React.HTMLProps<HTMLLabelElement> {}

export default function AppLabel(props: Props) {
  const { className: propsClasses, ...attributes } = props
  const baseClasses =
    'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
  const classes = baseClasses.concat(' ', propsClasses || '')
  return (
    <label {...attributes} className={classes}>
      {props.children}
    </label>
  )
}
