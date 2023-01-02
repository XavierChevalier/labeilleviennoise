import { createContext, useContext } from 'react'
import invariant from 'tiny-invariant'

interface RouterContextData {
  currentBaseUrl: string
  baseUrlWebsite: string
  baseUrlBlog: string
  baseUrlAuth: string
}

export const RouterContext = createContext<RouterContextData | undefined>(
  undefined
)

export const useRouterContext = (): RouterContextData => {
  const context = useContext(RouterContext)
  invariant(
    context,
    'useRouterContext must be used within a RouterContext. Did you forget to wrap your app in a <RouterContext.Provider />?'
  )
  return context
}
