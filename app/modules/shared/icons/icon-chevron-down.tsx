import type { FC, HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

const IconChevronDown: FC<HTMLProps<SVGElement>> = ({ className }) => (
  <svg
    className={mergeClasses('w-4 h-4 ml-2 -mr-1', className)}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
)

export default IconChevronDown
