import type { FC } from 'react'
import { Converter as MarkdownConverter } from 'showdown'

interface BlogPostContentProps {
  readonly title: string
  readonly markdown: string
}

const BlogPostContent: FC<BlogPostContentProps> = ({ title, markdown }) => (
  <article className="max-w-full prose lg:prose-xl prose-img:rounded-md prose-a:text-primary [&_img]:max-h-[500px]">
    <h1 className="text-primary">{title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: new MarkdownConverter().makeHtml(markdown),
      }}
    />
  </article>
)

export default BlogPostContent
