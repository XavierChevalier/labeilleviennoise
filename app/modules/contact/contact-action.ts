import type { ActionFunction } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { formAction } from 'remix-forms'
import { contactSchema } from '@/modules/contact/contact-form'
import { sendContactMail } from '@/modules/contact/send-email/send-contact-email'

export const contactAction: ActionFunction = async ({ request }) => {
  const mutation = makeDomainFunction(contactSchema)(
    async ({ from, fullname, subject, message }) =>
      await sendContactMail(from, fullname, subject, message)
  )

  return formAction({
    request,
    schema: contactSchema,
    mutation,
    successPath: `${request.url}?success=1`,
  })
}
