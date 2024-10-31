import { buildMeta } from '@labeilleviennoise/seo'
import type { ActionFunction } from '@remix-run/node'
import { useSearchParams } from '@remix-run/react'
import { contactAction } from '@/modules/contact/contact-action'
import ContactForm from '@/modules/contact/contact-form'
import ContactHeader from '@/modules/contact/contact-header'

export const meta = buildMeta({
  title: "Contact parrainage - L'Abeille Viennoise",
  description:
    'Contactez-nous pour tout renseignement sur le parrainage. Nous vous répondrons dans les plus brefs délais.',
  noIndex: true,
})

export const action: ActionFunction = contactAction

export default function ContactParrainage() {
  const [searchParams] = useSearchParams()
  const subject = 'Prise de contact pour parrainage'
  const message =
    'Bonjour, je souhaite devenir parrain ' +
    searchParams.get('per') +
    ' grâce à la formule ' +
    searchParams.get('title') +
    '.'

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <ContactHeader formSuccess={searchParams.has('success')}>
        Afin de confirmer votre demande de parrainage, merci de nous indiquer
        votre nom et une adresse email sur laquelle vous joindre.
      </ContactHeader>
      <ContactForm defaultValues={{ subject, message }} />
    </div>
  )
}
