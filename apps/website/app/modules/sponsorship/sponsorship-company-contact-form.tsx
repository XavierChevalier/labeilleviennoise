import { Form } from '@labeilleviennoise/forms-client'
import type { FC, HTMLProps } from 'react'
import { z } from 'zod'
import {
  company,
  from,
  fullname,
  message,
  subject,
} from '@/modules/shared/form/validations/contact-fields'

export const sponsorshipCompanyContactSchema = z.object({
  from,
  fullname,
  company,
  subject,
  message,
})

const SponsorshipCompanyContactForm: FC<HTMLProps<HTMLElement>> = () => (
  <Form
    schema={sponsorshipCompanyContactSchema}
    labels={{
      from: 'Votre email',
      fullname: 'Vos nom et prénom',
      company: 'Votre entreprise',
      subject: 'Sujet',
      message: 'Votre message',
    }}
    placeholders={{
      from: 'email@email.com',
      fullname: 'Maya Labeille',
      company: "L'abeille Viennoise",
      subject: 'Comment pouvons-nous vous renseigner ?',
      message: 'Dites-nous tout...',
    }}
    multiline={['message']}
  >
    {({ Field, Errors, Button }) => (
      <>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <Field name="fullname" className="w-full" />
          <Field name="company" className="w-full" />
        </div>
        <Field name="from" />
        <Field name="subject" />
        <Field name="message" />
        <Errors />
        <Button>Envoyer mon message</Button>
      </>
    )}
  </Form>
)

export default SponsorshipCompanyContactForm
