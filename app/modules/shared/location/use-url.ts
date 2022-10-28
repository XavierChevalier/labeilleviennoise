import { useContext } from 'react'
import { EnvContext } from '@/root'

export const useURL = () => {
  const { BASE_URL } = useContext(EnvContext)

  return {
    createUrl: (url: string | URL): URL => new URL(url, BASE_URL),
  }
}
