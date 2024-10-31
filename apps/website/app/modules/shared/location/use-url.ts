export const useURL = () => ({
  relativeUrl: (
    url: string,
    searchParams: URLSearchParams = new URLSearchParams()
  ): string => `${url}?${searchParams}`,
  mailto: (email: string, body: string): string =>
    `mailto:${email}?body=${encodeURIComponent(body)}`,
})
