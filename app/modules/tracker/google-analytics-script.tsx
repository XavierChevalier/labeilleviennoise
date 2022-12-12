import { memo, useContext } from 'react'
import { EnvContext } from '@/root'

export default memo(function GoogleAnalyticsScript() {
  const env = useContext(EnvContext)
  if (env.BASE_URL !== 'https://labeilleviennoise.com') {
    console.info('Google Analytics script not loaded because not in production')

    return null
  }

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M8VX5S03EW"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-M8VX5S03EW');`,
        }}
      />
    </>
  )
})
