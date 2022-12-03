import type { FC, HTMLProps } from 'react'

const NavigationFooterSocialNetworkLink: FC<HTMLProps<HTMLAnchorElement>> = ({
  children,
  ...attributes
}) => (
  <a
    {...attributes}
    target="_blank"
    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
  >
    {children}
  </a>
)

export default NavigationFooterSocialNetworkLink
