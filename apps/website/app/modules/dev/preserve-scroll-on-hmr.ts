const SCROLL_POSITION_KEY = '__remix_scroll_position__'

export function saveScrollPosition() {
  const scrollPosition = {
    x: window.scrollX,
    y: window.scrollY,
  }
  sessionStorage.setItem(SCROLL_POSITION_KEY, JSON.stringify(scrollPosition))
}

export function restoreScrollPosition(keepInStorage = false) {
  const saved = sessionStorage.getItem(SCROLL_POSITION_KEY)
  if (!saved) {
    return
  }

  try {
    const { x, y } = JSON.parse(saved)
    requestAnimationFrame(() => {
      window.scrollTo(x, y)
      if (!keepInStorage) {
        sessionStorage.removeItem(SCROLL_POSITION_KEY)
      }
    })
  } catch (e) {
    // Ignore parsing errors
  }
}

let scrollSaveInterval: ReturnType<typeof setInterval> | null = null
let scrollTimeout: ReturnType<typeof setTimeout> | null = null
let scrollHandler: (() => void) | null = null

function startScrollSaving() {
  scrollHandler = () => {
    if (scrollTimeout) clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(saveScrollPosition, 50)
  }
  window.addEventListener('scroll', scrollHandler, { passive: true })
  window.addEventListener('beforeunload', saveScrollPosition)
  window.addEventListener('popstate', saveScrollPosition)
  scrollSaveInterval = setInterval(saveScrollPosition, 500)
}

export function stopScrollSaving() {
  if (scrollSaveInterval) {
    clearInterval(scrollSaveInterval)
    scrollSaveInterval = null
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
    scrollTimeout = null
  }
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
    scrollHandler = null
  }
  window.removeEventListener('beforeunload', saveScrollPosition)
  window.removeEventListener('popstate', saveScrollPosition)
}

function isDevelopment(): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasWebpackHMR = typeof module !== 'undefined' && (module as any).hot
  const hasViteHMR =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof import.meta !== 'undefined' && (import.meta as any).hot

  return hasWebpackHMR || hasViteHMR
}

export function preserveScrollOnHMR() {
  if (!isDevelopment()) {
    return
  }

  restoreScrollPosition(true)

  setTimeout(() => {
    startScrollSaving()

    const restoreAttempts = [50, 150, 300, 500]
    restoreAttempts.forEach((delay, index) => {
      setTimeout(() => {
        restoreScrollPosition(index === restoreAttempts.length - 1)
      }, delay)
    })
  }, 0)
}
