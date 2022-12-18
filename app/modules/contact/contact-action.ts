import type { ActionFunction } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { contactSchema } from '@/modules/contact/contact-form'
import { sendContactMail } from '@/modules/contact/send-email/send-contact-email'
import { formActionWithSuccessFlag } from '@/modules/shared/form/form-action-with-success-flag.server'

export const contactAction: ActionFunction = ({ request }) =>
  formActionWithSuccessFlag({
    request,
    schema: contactSchema,
    mutation: makeDomainFunction(contactSchema)(sendContactMail),
  })
