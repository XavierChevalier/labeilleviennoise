export const useURL = () => ({
  relativeUrl: (
    url: string,
    searchParams: URLSearchParams = new URLSearchParams()
  ): string => `${url}?${searchParams}`,
})
