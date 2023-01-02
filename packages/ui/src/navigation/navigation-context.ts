import { createContext } from 'react'

export const NavigationContext = createContext({
  currentBaseUrl: '/',
  baseUrlWebsite: '/',
  baseUrlBlog: '/',
  baseUrlAuth: '/',
})
