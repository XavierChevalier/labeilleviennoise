import { InputError } from 'domain-functions'
import type { CreateBlogPostValidationSchema } from '@/routes/admin/blog/posts/new'

export const validateBlogPostMutationInput = (
  input: CreateBlogPostValidationSchema
) => {
  if (input.title.length === 0) {
    throw new InputError('Le contenu doit contenir un titre', 'markdown')
  }

  if (input.slug.length === 0) {
    throw new InputError(
      'Le titre doit contenir au moins un caractère autre que des espaces, des tirets et des underscores',
      'markdown'
    )
  }
}
