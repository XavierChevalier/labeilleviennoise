import { formAction } from 'remix-forms'

export const formActionWithSuccessFlag: typeof formAction = (attrs) =>
  formAction({
    ...attrs,
    successPath: `${attrs.request.url}?success=1`,
  })
