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
import { z } from 'zod'
import { createBlogPost } from '@/modules/blog/mutations/create-blog-post/create-blog-post.server'
import { extractTitleAndSlugFromMarkdown } from '@/modules/blog/mutations/create-blog-post/extract-title-and-slug-from-markdown.server'
import { validateBlogPostMutationInput } from '@/modules/blog/mutations/create-blog-post/validate-blog-post-mutation-input.server'
import BlogEditorTips from '@/modules/blog/ui/posts/editor/blog-editor-tips'

export const createBlogPostFormSchema = z.object({
  description: z
    .string()
    .min(1, { message: 'La description ne doit pas être vide' })
    .max(155, {
      message: 'La description ne doit pas dépasser 155 caractères',
    }),
  markdown: z.string().min(1, { message: 'Le contenu ne doit pas être vide' }),
})

export type CreateBlogPostFormSchema = z.infer<typeof createBlogPostFormSchema>

export const createBlogPostMutationSchema = createBlogPostFormSchema.extend({
  title: z.string(),
  slug: z.string(),
})

export type CreateBlogPostValidationSchema = z.infer<
  typeof createBlogPostMutationSchema
>

export const action: ActionFunction = ({ request }) =>
  formAction({
    beforeAction: redirectIfNotAuthenticated(googleAuthenticator),
    request,
    schema: createBlogPostMutationSchema,
    transformValues: (post): CreateBlogPostValidationSchema =>
      extractTitleAndSlugFromMarkdown(post as CreateBlogPostFormSchema),
    mutation: makeDomainFunction(createBlogPostMutationSchema)(
      validateBeforeMutation(validateBlogPostMutationInput)(createBlogPost)
    ),
    successPath: process.env.BASE_URL_BLOG,
  })

export default function PostSlug() {
  return (
    <div className="container py-4">
      <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
        Nouvel article
      </h1>

      <BlogEditorTips />

      <Form
        schema={createBlogPostFormSchema}
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
            <Button>Publier</Button>
          </>
        )}
      </Form>
    </div>
  )
}
