import { slugify } from '@labeilleviennoise/identifier'
import type { CreateBlogPostFormSchema } from '@/routes/admin/blog/posts/new'

const getTitleFromMarkdown = (markdown: string) =>
  markdown.match(/^# (.*)$/m)?.[1] || ''

const removeTitleFromMarkdown = (markdown: string) =>
  markdown.replace(/^# (.*)$/m, '')

export const extractTitleAndSlugFromMarkdown = (
  post: CreateBlogPostFormSchema
) => {
  const title = getTitleFromMarkdown(post.markdown)

  return {
    ...post,
    title,
    slug: slugify(title),
    markdown: removeTitleFromMarkdown(post.markdown),
  }
}
