import { formAction } from '@/form-action'

export const formActionWithSuccessFlag: typeof formAction = (attrs) =>
  formAction({
    ...attrs,
    successPath: `${attrs.request.url}?success=1`,
  })
