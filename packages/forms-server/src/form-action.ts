import { json, redirect } from '@remix-run/node'
import { createFormAction } from 'remix-forms'
// noinspection ES6UnusedImports
// We need to import this to make sure the types are available (portability)
// @see https://github.com/microsoft/TypeScript/issues/47663
import type {} from 'zod'

export const formAction = createFormAction({ redirect, json })
