import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { LoaderFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'

export const meta = preventPageIndexing

export const loader = (({ request }) =>
  typedjson({
    authenticationFailed: !!new URL(request.url).searchParams.get(
      'authentication_failed'
    ),
  })) satisfies LoaderFunction

export default function Login() {
  const { authenticationFailed } = useTypedLoaderData<typeof loader>()

  return (
    <div className="flex justify-center items-center text-center h-[60vh]">
      <div>
        {authenticationFailed && (
          <div className="mb-8 p-3 bg-red-400 text-white rounded-md">
            Impossible de vous authentifier. Veuillez réessayer.
          </div>
        )}
        <Form action="/google/google" method="post" className="text-xl">
          <button type="submit">Login with Google</button>
        </Form>
      </div>
    </div>
  )
}
