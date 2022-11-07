import type { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string
  description?: JSX.Element
}

const ApiarySection: FC<Props> = (props) => (
  <section className="min-h-[410px]">
    <h2 className="max-w-xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">
      {props.title}
    </h2>

    {props?.description}

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-2 py-6 md:gap-6">
      {props.children}
    </div>
  </section>
)

export default ApiarySection
