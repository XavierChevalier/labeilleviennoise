import { mergeClasses } from '@labeilleviennoise/merge-classes'
import { useSearchParams } from '@remix-run/react'
import type { FC, HTMLProps } from 'react'
import ContactHeader from '@/modules/contact/contact-header'
import SponsorshipCompanyContactForm from '@/modules/sponsorship/sponsorship-company-contact-form'

const SponsorshipCompanyContact: FC<HTMLProps<HTMLElement>> = ({
  id,
  className,
}) => {
  const [searchParams] = useSearchParams()

  return (
    <div
      id={id}
      className={mergeClasses('py-8 px-4 mx-auto max-w-screen-md', className)}
    >
      <ContactHeader formSuccess={searchParams.has('success')}>
        Afin de confirmer votre demande de parrainage, merci de nous indiquer
        votre nom, votre entreprise et une adresse email sur laquelle vous
        joindre.
      </ContactHeader>
      <SponsorshipCompanyContactForm />
    </div>
  )
}

export default SponsorshipCompanyContact
