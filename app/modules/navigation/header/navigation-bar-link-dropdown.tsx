import type { FC, HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'
import { useToggle } from '@/modules/shared/states/use-toggle'

export interface NavigationBarLinkDropdownProps
  extends HTMLProps<HTMLDivElement> {
  triggerElement: JSX.Element
}

const NavigationBarLinkDropdown: FC<NavigationBarLinkDropdownProps> = ({
  children,
  triggerElement,
  ...attributes
}) => {
  const [isToggled, toggle] = useToggle(false)

  return (
    <div {...attributes}>
      <span onClick={toggle} className="hidden md:block">
        {triggerElement}
      </span>
      <div
        onClick={toggle}
        className={mergeClasses(
          'md:absolute z-10 md:w-44 md:bg-white md:shadow md:mt-2 rounded-md md:divide-y md:divide-gray-100 md:dark:bg-gray-700',
          !isToggled && 'md:hidden'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default NavigationBarLinkDropdown
