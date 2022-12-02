import type { ActionFunction } from '@remix-run/node'
import { makeDomainFunction } from 'domain-functions'
import { IKImage } from 'imagekitio-react'
import AppButton from '@/modules/shared/button/app-button'
import { formActionWithSuccessFlag } from '@/modules/shared/form/form-action-with-success-flag'
import IconArrowRight from '@/modules/shared/icons/icon-arrow-right'
import { sendCompanyContactEmail } from '@/modules/sponsorship/send-email/send-company-contact-email'
import SponsorshipCompanyContact from '@/modules/sponsorship/sponsorship-company-contact'
import { sponsorshipCompanyContactSchema } from '@/modules/sponsorship/sponsorship-company-contact-form'
import SponsorshipFormulaCard from '@/modules/sponsorship/sponsorship-formula-card'

export const action: ActionFunction = ({ request }) =>
  formActionWithSuccessFlag({
    request,
    schema: sponsorshipCompanyContactSchema,
    mutation: makeDomainFunction(sponsorshipCompanyContactSchema)(
      sendCompanyContactEmail
    ),
  })

export default function ParrainageEntreprise() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <section className="md:min-h-[400px] flex flex-col gap-8 items-center py-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 md:py-16">
        <div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Parrainage
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl dark:text-gray-400">
            <strong className="font-bold">Vous êtes une entreprise</strong> et
            vous souhaitez vous engager dans la protection des abeilles, mais
            vous n’avez pas d’espace pour installer une ruche ?
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl dark:text-gray-400">
            L’Abeille Viennoise propose à votre entreprise de parrainer une ou
            plusieurs ruches installées et gérées sur son rucher à Vienne. Nous
            vous offrons la possibilité de{' '}
            <strong className="font-bold">
              personnaliser cette dernière au nom de votre entreprise
            </strong>
            .
          </p>
        </div>

        <div className="hidden md:flex">
          <IKImage
            path="images/parrainage/formation-entreprise.jpg"
            alt="Formation entreprise"
            className="rounded-md"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '400', width: '600' }]}
          />
        </div>
      </section>

      <section className="min-h-[400px] flex flex-col gap-8 items-center py-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 md:py-16">
        <IKImage
          path="images/parrainage/steffie-formation-entreprise.jpg"
          alt="Formation entreprise"
          className="rounded-md"
          lqip={{ active: true, quality: 10 }}
          transformation={[{ height: '400', width: '600' }]}
        />

        <div>
          <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl dark:text-gray-400">
            C’est un intérêt particulier pour vos salariés, car certaines
            visites de la ruche sont prévues dans la formule, ils peuvent ainsi
            découvrir le monde apicole.
          </p>

          <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl dark:text-gray-400">
            Votre entreprise possède quelques mètres carrés, toit, jardin ?
            Prenez contact avec l’Abeille Viennoise et{' '}
            <strong className="font-bold">
              vérifions ensemble la faisabilité du projet
            </strong>
            .
          </p>

          <div className="hidden mt-6 md:flex flex-col gap-4 sm:flex-row">
            <AppButton href="/parrainage-entreprise#contact" type="primary">
              Prendre contact
              <IconArrowRight />
            </AppButton>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-8 mt-8">
        <SponsorshipFormulaCard className="md:min-w-[385px]" />
        <SponsorshipCompanyContact id="contact" />
      </section>
    </div>
  )
}
