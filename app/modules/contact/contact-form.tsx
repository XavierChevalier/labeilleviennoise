import { z } from 'zod'
import Form from '@/modules/shared/form/form'

interface Props extends React.HTMLProps<HTMLElement> {
  defaultValues?: {
    fullname?: string
    from?: string
    subject?: string
    message?: string
  }
}
export const contactSchema = z.object({
  from: z
    .string()
    .min(1, { message: 'Votre email ne doit pas être vide' })
    .email({ message: "Votre email n'est pas valide" }),
  fullname: z
    .string()
    .min(1, { message: 'Vos nom et prénom ne doivent pas être vide' }),
  subject: z
    .string()
    .min(1, { message: 'Dites-nous sur quel sujet nous pouvons vous aider' }),
  message: z.string().min(1, {
    message:
      'Quelques informations sur votre questionnement nous seraient utiles',
  }),
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
        subject: 'Sur quel sujet pouvons-nous vous aider ?',
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
