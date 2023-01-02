import { CatchBoundaryLayout } from '@labeilleviennoise/layouts'
import { useCatch } from '@remix-run/react'
import PageNotFound from './page-not-found'
import UnknownError from './unknown-error'

export const CatchBoundary = () => {
  const caught = useCatch()

  return (
    <CatchBoundaryLayout>
      {caught.status === 404 ? (
        <PageNotFound title={caught.data?.message} />
      ) : (
        <UnknownError />
      )}
    </CatchBoundaryLayout>
  )
}
