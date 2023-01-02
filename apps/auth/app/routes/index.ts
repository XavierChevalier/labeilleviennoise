import { preventPageIndexing } from '@labeilleviennoise/seo'
import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const meta: MetaFunction = preventPageIndexing

export const loader: LoaderFunction = () => redirect('/login')
