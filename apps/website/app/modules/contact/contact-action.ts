import { formActionWithSuccessFlag } from '@labeilleviennoise/forms-server'
import type { ActionFunction } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { contactSchema } from '@/modules/contact/contact-form'
import { sendContactMail } from '@/modules/contact/send-email/send-contact-email'

export const contactAction: ActionFunction = ({ request }) =>
  formActionWithSuccessFlag({
    request,
    schema: contactSchema,
    mutation: makeDomainFunction(contactSchema)(sendContactMail),
  })
