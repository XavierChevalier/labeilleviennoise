import { IKImage } from 'imagekitio-react'
import IconArrowRight from '@/modules/shared/icons/icon-arrow-right'
import { AppLink } from '@/modules/shared/link/app-link'
import { AppLinkButton } from '@/modules/shared/link/app-link-button'

export default function HomeWhyWeDoThis() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="mx-auto mb-6 md:mb-0 md:mt-0 md:col-span-6 lg:col-span-5 md:flex hidden">
        <IKImage
          path="images/bee-cell-2.webp"
          alt="Illustration d'une abeille"
          lqip={{ active: true, quality: 10 }}
          transformation={[{ height: '500' }]}
        />
      </div>

      <div className="mr-auto place-self-center md:col-span-6 lg:col-span-7 sm:py-6 lg:px-8">
        <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Pourquoi faisons-nous cela ?
        </h2>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          Les abeilles sont reconnues grande cause mondiale, ces ouvrières sont
          menacées, on constate 30 % de perte de colonies par an.
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          Grâce au <AppLink to="/parrainage">parrainage des abeilles</AppLink>,
          nous agissons concrètement{' '}
          <strong className="font-bold">
            en faveur de leur avenir et favorisons ainsi leur développement dans
            le respect de la biodiversité
          </strong>
          . Par votre parrainage, vous nous permettez d'installer de nouvelles
          colonies d’abeilles en région Rhône-Alpes, notamment sur Vienne en
          Isère.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <AppLinkButton to="/parrainage" variant="primary">
            En savoir plus
            <IconArrowRight />
          </AppLinkButton>
        </div>
      </div>
    </section>
  )
}
