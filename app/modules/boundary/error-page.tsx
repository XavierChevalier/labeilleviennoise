import type { FC, PropsWithChildren } from 'react'
import { AppLink } from '@/modules/shared/link/app-link'

interface ErrorPageProps extends PropsWithChildren {
  title: string
}

const ErrorPage: FC<ErrorPageProps> = ({ title, children }) => (
  <section className="min-h-[60vh]">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-amber-600 dark:text-amber-500">
          {title}
        </h1>
        <div className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          {children}
        </div>
        <AppLink to="/">Retour à l'accueil</AppLink>
      </div>
    </div>
  </section>
)
export default ErrorPage
