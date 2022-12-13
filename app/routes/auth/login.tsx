import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import { AppButton } from '@/modules/shared/link/app-link-button'
import { generateMeta } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Login - L'Abeille Viennoise",
    description: 'Page de connexion',
    url: 'https://labeilleviennoise.com/login',
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
    <div className="container">
      {authenticationFailed && (
        <div className="p-3 bg-red-400 text-white rounded-md">
          Impossible de vous authentifier. Veuillez réessayer.
        </div>
      )}
      <Form
        action="/auth/google/google"
        method="post"
        className="p-5 text-center"
      >
        <AppButton type="submit">Login with Google</AppButton>
      </Form>
    </div>
  )
}
