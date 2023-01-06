import { Form } from '@labeilleviennoise/forms-client'
import type { HTMLProps } from 'react'
import { z } from 'zod'
import {
  from,
  fullname,
  message,
  subject,
} from '@/modules/shared/form/validations/contact-fields'

interface Props extends HTMLProps<HTMLElement> {
  defaultValues?: {
    fullname?: string
    from?: string
    subject?: string
    message?: string
  }
}
export const contactSchema = z.object({
  from,
  fullname,
  subject,
  message,
})
export default function ContactForm(props: Props) {
  return (
    <Form
      schema={contactSchema}
      labels={{
        from: 'Votre email',
        fullname: 'Vos nom et prénom',
        subject: 'Sujet',
        message: 'Votre message',
      }}
      placeholders={{
        from: 'email@email.com',
        fullname: 'Maya Labeille',
        subject: 'Comment pouvons-nous vous aider ?',
        message: 'Dites-nous tout...',
      }}
      multiline={['message']}
    >
      {({ Field, Errors, Button }) => (
        <>
          <Field name="fullname" value={props?.defaultValues?.fullname} />
          <Field name="from" value={props?.defaultValues?.from} />
          <Field name="subject" value={props?.defaultValues?.subject} />
          <Field name="message" value={props?.defaultValues?.message} />
          <Errors />
          <Button>Envoyer mon message</Button>
        </>
      )}
    </Form>
  )
}
