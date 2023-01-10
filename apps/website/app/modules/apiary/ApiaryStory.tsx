import { mergeClasses } from '@labeilleviennoise/merge-classes'
import type { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  description: string
}

const ApiaryStory: FC<Props> = ({ className, children, description }) => (
  <div
    className={mergeClasses(
      'md:min-h-[165px] lg:min-h-[250px] group rounded-md overflow-hidden relative before:absolute before:bottom-0 before:block before:px-4 before:py-12 before:transition-all hover:before:h-[100px] before:h-0 before:w-full before:from-transparent before:to-black before:bg-gradient-to-b',
      className
    )}
  >
    {children}

    <span className="group-hover:-translate-y-2 transition absolute bottom-0 p-4 w-full font-bold text-white">
      {description}
    </span>
  </div>
)

export default ApiaryStory
