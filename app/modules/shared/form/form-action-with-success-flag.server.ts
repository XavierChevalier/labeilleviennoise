import { formAction } from '@/modules/shared/form/form-action.server'

export const formActionWithSuccessFlag: typeof formAction = (attrs) =>
  formAction({
    ...attrs,
    successPath: `${attrs.request.url}?success=1`,
  })
