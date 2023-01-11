import { storeMandatoryClientEnvFromServerRequest } from '@labeilleviennoise/environment-server'
import { registerMonitoring } from '@labeilleviennoise/monitoring'
import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'

registerMonitoring()

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  storeMandatoryClientEnvFromServerRequest(request)
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  })
}
