import { memo, useContext } from 'react'
import { EnvContext } from '@/root'

export default memo(function HotJarScript() {
  const env = useContext(EnvContext)
  if (!env.IS_PRODUCTION) {
    console.info('HotJar script not loaded because not in production')

    return null
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:3204963,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
      }}
    />
  )
})
