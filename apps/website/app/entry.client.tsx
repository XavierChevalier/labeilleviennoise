import { registerMonitoring } from '@labeilleviennoise/monitoring'
import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import {
  preserveScrollOnHMR,
  restoreScrollPosition,
  saveScrollPosition,
  stopScrollSaving,
} from './modules/dev/preserve-scroll-on-hmr'

registerMonitoring()

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    )

    // Preserve scroll position during HMR (dev only)
    preserveScrollOnHMR()
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}

// Register HMR handlers in entry.client.tsx where HMR context is guaranteed
// Support for both webpack (Remix v1) and Vite
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (typeof module !== 'undefined' && (module as any).hot) {
  // Webpack HMR
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hot = (module as any).hot

  // Save scroll position before HMR disposes
  hot.dispose(() => {
    saveScrollPosition()
    stopScrollSaving()
  })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
else if (typeof import.meta !== 'undefined' && (import.meta as any).hot) {
  // Vite HMR
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hot = (import.meta as any).hot

  // Save scroll position before HMR disposes
  hot.dispose(() => {
    saveScrollPosition()
    stopScrollSaving()
  })

  // Restore scroll position after HMR update (Vite only)
  if (hot.on) {
    hot.on('vite:afterUpdate', () => {
      // Wait for React to re-render
      setTimeout(() => {
        restoreScrollPosition(false)
      }, 100)
    })
  }
}
