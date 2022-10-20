import { useContext, useEffect } from 'react'
import AppInput from '@/modules/shared/form/input/app-input'
import AppLabel from '@/modules/shared/form/label/app-label'
import AppTextarea from '@/modules/shared/form/textarea/app-textarea'
import AppLink from '@/modules/shared/link/app-link'
import { EnvContext } from '@/root'

export default function Contact() {
  const { PUBLIC_CONTACT_MAIL } = useContext(EnvContext)

  useEffect(() => {
    const form = document.getElementById('contact-form') as HTMLFormElement
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const name = form.fullname.value
      const subject = form.subject.value
      const message = `${name}%0D%0A${form.message.value}`

      window.location.href = `mailto:${PUBLIC_CONTACT_MAIL}?subject=${subject}&body=${message}`
    })
  }, [])
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contactez-nous !
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Des questions sans réponses dans notre{' '}
          <AppLink to="/faq">foire aux questions</AppLink> ? Une proposition ?
          N'hésitez pas à nous contacter.
        </p>
        <form id="contact-form" className="space-y-8">
          <div>
            <AppLabel htmlFor="fullname">Votre nom</AppLabel>
            <AppInput
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Maya Labeille"
              required
            />
          </div>
          <div>
            <AppLabel htmlFor="subject">Sujet</AppLabel>
            <AppInput
              type="text"
              name="subject"
              id="subject"
              placeholder="Sur quel sujet pouvons-nous vous aider ?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <AppLabel htmlFor="message">Votre message</AppLabel>
            <AppTextarea
              id="message"
              name="message"
              rows={6}
              placeholder="Dites-nous tout..."
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-600 sm:w-fit hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Envoyer mon message
          </button>
        </form>
      </div>
    </section>
  )
}
