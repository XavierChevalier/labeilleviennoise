import { buildMeta } from '@labeilleviennoise/seo'
import { AppLink } from '@labeilleviennoise/ui'
import type { ActionFunction } from '@remix-run/node'
import { useSearchParams } from '@remix-run/react'
import { contactAction } from '@/modules/contact/contact-action'
import ContactHeader from '@/modules/contact/contact-header'
import { TheHoneyHouse } from '@/routes/la-miellerie'

export const meta = buildMeta({
  title: "Contact - L'Abeille Viennoise",
  description:
    'Contactez-nous pour toute question. Nous vous répondrons dans les plus brefs délais.',
})

export const action: ActionFunction = contactAction

export default function Contact() {
  const [searchParams] = useSearchParams()

  return (
    <div>
      <TheHoneyHouse />
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <ContactHeader formSuccess={searchParams.has('success')}>
          Des questions sans réponses dans notre{' '}
          <AppLink
            to="/faq"
            destination="website"
            data-umami-event="contact:click:link:faq"
          >
            foire aux questions
          </AppLink>{' '}
          ?<br />
          Une proposition ? N'hésitez pas à nous contacter à l'adresse{' '}
          <AppLink
            to="mailto:labeilleviennoise@gmail.com"
            destination="website"
            data-umami-event="contact:click:email"
          >
            labeilleviennoise@gmail.com
          </AppLink>
          .
        </ContactHeader>
      </div>
    </div>
  )
}
