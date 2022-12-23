import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import { generateMeta } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Login - L'Abeille Viennoise",
    description: 'Page de connexion',
    url: 'https://auth.labeilleviennoise.com/login',
    noIndex: true,
  })

export const loader = ({ request }: LoaderArgs) =>
  typedjson({
    authenticationFailed: !!new URL(request.url).searchParams.get(
      'authentication_failed'
    ),
  })

export default function Login() {
  const { authenticationFailed } = useTypedLoaderData<typeof loader>()

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        {authenticationFailed && (
          <div className="p-3 bg-red-400 text-white rounded-md">
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
