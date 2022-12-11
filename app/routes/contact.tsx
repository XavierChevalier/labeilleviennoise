import type { ActionFunction, MetaFunction } from '@remix-run/node'
import { useSearchParams } from '@remix-run/react'
import { contactAction } from '@/modules/contact/contact-action'
import ContactForm from '@/modules/contact/contact-form'
import ContactHeader from '@/modules/contact/contact-header'
import { AppLink } from '@/modules/shared/link/app-link'
import { generateMeta } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Contact - L'Abeille Viennoise",
    description:
      'Contactez-nous pour toute question. Nous vous répondrons dans les plus brefs délais.',
    url: `${process.env.BASE_URL}/contact`,
  })

export const action: ActionFunction = contactAction

export default function Contact() {
  const [searchParams] = useSearchParams()

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <ContactHeader formSuccess={searchParams.has('success')}>
        Des questions sans réponses dans notre{' '}
        <AppLink to="/faq">foire aux questions</AppLink> ? Une proposition ?
        N'hésitez pas à nous contacter.
      </ContactHeader>
      <ContactForm />
    </div>
  )
}
