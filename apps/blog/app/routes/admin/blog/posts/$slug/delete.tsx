import {
  googleAuthenticator,
  redirectIfNotAuthenticated,
} from '@/modules/auth/auth.server'
import { Form } from '@labeilleviennoise/forms-client'
import { formAction } from '@labeilleviennoise/forms-server'
import { AppLink } from '@labeilleviennoise/ui'
import type { ActionFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import { makeDomainFunction } from 'domain-functions'
import { useTypedLoaderData } from 'remix-typedjson'
import { z } from 'zod'
import { findBlogPostLoader } from '@/modules/blog/loaders/find-blog-post-loader'
import { deleteBlogPostBySlug } from '@/modules/blog/mutations/delete-blog-post/delete-blog-post-by-slug.server'

export const loader = findBlogPostLoader

const deleteBlogPostBySlugValidationSchema = z
  .object({
    slug: z.string().min(1, { message: 'Le slug ne doit pas être vide' }),
  })
  .transform(({ slug }) => slug)

export const action: ActionFunction = ({ request }) =>
  formAction({
    beforeAction: redirectIfNotAuthenticated(googleAuthenticator),
    request,
    schema: deleteBlogPostBySlugValidationSchema,
    mutation: makeDomainFunction(deleteBlogPostBySlugValidationSchema)(
      deleteBlogPostBySlug
    ),
    successPath: '/blog',
  })

export default function DeleteBlogPost() {
  const { slug } = useParams()
  const post = useTypedLoaderData<typeof loader>()

  return (
    <div className="container py-4">
      <h1 className="text-2xl font-bold mb-4">Supprimer l'article</h1>
      <p className="mb-4">
        Êtes-vous sûr de vouloir supprimer l'article «{' '}
        <AppLink to={`/${post.slug}`} destination="blog" className="font-bold">
          {post.title}
        </AppLink>{' '}
        » ?
      </p>
      <Form schema={deleteBlogPostBySlugValidationSchema}>
        {({ Field, Errors, Button }) => (
          <>
            <div className="hidden">
              <Field name="slug" value={slug} />
            </div>
            <Errors />
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Supprimer l'article
            </Button>
          </>
        )}
      </Form>
    </div>
  )
}
