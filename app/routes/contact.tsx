import type { ActionFunction } from '@remix-run/node'
import { useSearchParams } from '@remix-run/react'
import { makeDomainFunction } from 'domain-functions'
import { Alert } from 'flowbite-react'
import { formAction } from 'remix-forms'
import { z } from 'zod'
import { sendContactMail } from '@/modules/contact/send-email/send-contact-email'
import Form from '@/modules/shared/form/form'
import AppLink from '@/modules/shared/link/app-link'

const schema = z.object({
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

export const action: ActionFunction = async ({ request }) => {
  const mutation = makeDomainFunction(schema)(
    async ({ from, fullname, subject, message }) =>
      await sendContactMail(from, fullname, subject, message)
  )

  return formAction({
    request,
    schema,
    mutation,
    successPath: '/contact?success=1',
  })
}

export default function Contact() {
  const [searchParams] = useSearchParams()

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contactez-nous !
        </h2>
        <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Des questions sans réponses dans notre{' '}
          <AppLink to="/faq">foire aux questions</AppLink> ? Une proposition ?
          N'hésitez pas à nous contacter.
        </p>
        {searchParams.get('success') && (
          <div className="mb-6">
            <Alert color="success">
              <span>
                <span className="font-medium">Succès</span> Votre message a bien
                été envoyé. Nous reviendrons vers vous au plus vite ! 🐝 Bzz!
              </span>
            </Alert>
          </div>
        )}
        <Form
          schema={schema}
          labels={{
            from: 'Votre email',
            fullname: 'Votre nom et prénom',
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
              <Field name="from" />
              <Field name="fullname" />
              <Field name="subject" />
              <Field name="message" />
              <Errors />
              <Button>Envoyer mon message</Button>
            </>
          )}
        </Form>
      </div>
    </section>
  )
}
