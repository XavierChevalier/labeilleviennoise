import { DefaultLayout } from '@labeilleviennoise/layouts'
import { useCatch } from '@remix-run/react'
import type { FC, HTMLProps } from 'react'
import PageNotFound from './page-not-found'
import UnknownError from './unknown-error'

export const CatchBoundary: FC<HTMLProps<HTMLElement>> = () => {
  const caught = useCatch()

  return (
    <DefaultLayout>
      {caught.status === 404 ? (
        <PageNotFound title={caught.data?.message} />
      ) : (
        <UnknownError />
      )}
    </DefaultLayout>
  )
}
