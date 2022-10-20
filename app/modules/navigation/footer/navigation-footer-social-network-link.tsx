export default function NavigationFooterSocialNetworkLink(
  props: React.HTMLProps<HTMLAnchorElement>
) {
  return (
    <a
      {...props}
      target="_blank"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      {props.children}
    </a>
  )
}
