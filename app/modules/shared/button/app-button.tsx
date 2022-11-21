import type { FC, HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

export interface Props extends HTMLProps<HTMLAnchorElement> {
  type?: 'primary' | 'fancy'
}

export default function AppButton({
  type,
  children,
  className: propsClasses,
  ...attributes
}: Props) {
  const baseClasses =
    'relative inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg focus:ring-4'
  const fancyEffect = `
    group
    relative
    overflow-hidden
    text-white
    
    before:z-[-1]
    before:absolute
    before:w-full
    before:h-full
    before:bg-gradient-to-r
    before:from-primary
    before:to-yellow-400
    
    after:z-[-1]
    after:absolute
    after:w-full
    after:h-full
    after:transition-opacity
    after:ease-out
    after:bg-primary
    after:opacity-100
    hover:after:opacity-0
   `
  const primaryRing = 'focus:ring-primary-300 dark:focus:ring-primary-900'
  const classes = mergeClasses(
    baseClasses,
    propsClasses,
    {
      default:
        'text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
      fancy: mergeClasses(primaryRing, fancyEffect),
      primary: mergeClasses(
        primaryRing,
        'text-white bg-primary hover:bg-primary-500'
      ),
    }[type || 'default']
  )

  return (
    <a className={classes} {...attributes}>
      {type === 'fancy' && <FancyHoverEffect />}
      {children}
    </a>
  )
}

const FancyHoverEffect: FC = () => (
  <div
    className="
      overflow-hidden
      after:absolute
      after:w-12
      hover:after:w-12
      after:-top-2
      after:-right-20
      after:opacity-0
      after:transition-none
      group-hover:after:opacity-100
      group-hover:after:duration-1000
      group-hover:after:transition-transform
      group-hover:after:-translate-x-[350px]
      after:h-[200%]
      after:rotate-12
      after:bg-white/30

      before:absolute
      before:w-12
      group-hover:before:w-12
      before:-top-2
      before:-right-20
      before:delay-150
      before:opacity-0
      before:transition-none
      group-hover:before:opacity-100
      group-hover:before:duration-1000
      group-hover:before:transition-transform
      group-hover:before:-translate-x-[350px]
      before:h-[200%]
      before:rotate-12
      before:bg-white/20
    "
  />
)
