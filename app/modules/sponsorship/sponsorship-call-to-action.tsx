import { IKImage } from 'imagekitio-react'
import AppButton from '../shared/button/app-button'
import IconArrowRight from '@/modules/shared/icons/icon-arrow-right'

export default function SponsorshipCallToAction() {
  return (
    <section className="my-8 flex">
      <div className="mr-auto order-2 md:order-1 place-self-center md:col-span-6 lg:col-span-7">
        <h3 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
          Vous souhaitez soutenir le projet ?<br />
          Devenez parrain d'une ruche !
        </h3>

        <div className="flex flex-col gap-4 sm:flex-row">
          <AppButton href="/parrainage" type="primary">
            Comment ça marche ?
            <IconArrowRight />
          </AppButton>
        </div>
      </div>

      <div className="hidden mx-auto mb-6 md:mb-0 order-1 md:order-2 md:mt-0 md:col-span-6 lg:col-span-5 md:flex">
        <IKImage
          path="images/bee-large.png"
          alt="Illustration d'une abeille"
          className="min-w-[400px] max-h-[293px]"
          transformation={[{ width: '400' }]}
        />
      </div>
    </section>
  )
}
