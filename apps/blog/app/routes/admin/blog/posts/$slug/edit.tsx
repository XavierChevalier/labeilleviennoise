import {
  googleAuthenticator,
  redirectIfNotAuthenticated,
} from '@/modules/auth/auth.server'
import { Form } from '@labeilleviennoise/forms-client'
import {
  formAction,
  validateBeforeMutation,
} from '@labeilleviennoise/forms-server'
import type { ActionFunction } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { useTypedLoaderData } from 'remix-typedjson'
import { findBlogPostLoader } from '@/modules/blog/loaders/find-blog-post-loader'
import { extractTitleAndSlugFromMarkdown } from '@/modules/blog/mutations/create-blog-post/extract-title-and-slug-from-markdown.server'
import { validateBlogPostMutationInput } from '@/modules/blog/mutations/create-blog-post/validate-blog-post-mutation-input.server'
import { editBlogPost } from '@/modules/blog/mutations/edit-blog-post/edit-blog-post.server'
import BlogEditorTips from '@/modules/blog/ui/posts/editor/blog-editor-tips'
import type {
  CreateBlogPostFormSchema,
  CreateBlogPostValidationSchema,
} from '@/routes/admin/blog/posts/new'
import {
  createBlogPostFormSchema,
  createBlogPostMutationSchema,
} from '@/routes/admin/blog/posts/new'

export const loader = findBlogPostLoader

export const action: ActionFunction = ({ request, params: { slug } }) =>
  formAction({
    beforeAction: redirectIfNotAuthenticated(googleAuthenticator),
    request,
    schema: createBlogPostFormSchema,
    transformValues: (post): CreateBlogPostValidationSchema =>
      extractTitleAndSlugFromMarkdown(post as CreateBlogPostFormSchema),
    mutation: makeDomainFunction(createBlogPostMutationSchema)(
      validateBeforeMutation(validateBlogPostMutationInput)(editBlogPost(slug!))
    ),
    successPath: '/blog',
  })

export default function EditBlogPost() {
  const post = useTypedLoaderData<typeof loader>()

  return (
    <div className="container py-4">
      <h1 className="text-2xl font-bold mb-4">Editer l'article</h1>

      <BlogEditorTips />

      <Form
        schema={createBlogPostFormSchema}
        values={{
          description: post.description,
          markdown: `# ${post.title}${post.markdown}`,
        }}
        labels={{
          description:
            "Description de l'article (SEO, limitée à 155 caractères)",
          markdown: "Contenu de l'article au format Markdown",
        }}
        placeholders={{
          description: "Un chat, c'est mignon et cool 😸",
          markdown: `# Pourquoi j'aime les chats ?

## Les qualités des chats

- Ils sont mignons
- Ils sont doux
- Ils sont indépendants
          `,
        }}
        multiline={['markdown']}
      >
        {({ Field, Errors, Button }) => (
          <>
            <Field name="description" autoFocus />
            <Field name="markdown" />
            <Errors />
            <Button>Mettre à jour</Button>
          </>
        )}
      </Form>
    </div>
  )
}
