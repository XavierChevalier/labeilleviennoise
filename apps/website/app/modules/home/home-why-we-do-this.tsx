import { IKImage } from 'imagekitio-react'
import CenteredImageContainer from '@/modules/shared/images/centered-image-container'

export default function HomeWhyWeDoThis() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="mx-auto mb-6 md:mb-0 md:mt-0 md:col-span-6 lg:col-span-5 md:flex hidden">
        <CenteredImageContainer>
          <IKImage
            path="images/bee-cell-2.webp"
            alt="Illustration d'une abeille"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '500' }]}
          />
        </CenteredImageContainer>
      </div>

      <div className="mr-auto place-self-center md:col-span-6 lg:col-span-7 sm:py-6 lg:px-8">
        <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Pourquoi faisons-nous cela ?
        </h2>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          <strong className="font-bold">Prise de conscience et constat</strong>{' '}
          nous ont menés à ce projet utopique. Redonner une place aux{' '}
          <strong className="font-bold">
            abeilles dans notre environnement quotidien
          </strong>
          .
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          Nos amies les abeilles traversent actuellement une{' '}
          <strong className="font-bold">période critique</strong>. En effet, ces{' '}
          <strong className="font-bold">ouvrières acharnées</strong> font face à
          une{' '}
          <strong className="font-bold">
            perte importante de leurs colonies chaque année
          </strong>{' '}
          !
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          <strong className="font-bold">L'Abeille Viennoise</strong> est
          déterminée à <strong className="font-bold">agir concrètement</strong>{' '}
          pour la{' '}
          <strong className="font-bold">
            protection des abeilles et de leur environnement
          </strong>
          .
        </p>
        <p className="max-w-2xl mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          <strong className="font-bold">Avec votre soutien</strong>, nous
          pouvons œuvrer ensemble pour protéger ces merveilleuses créatures.
        </p>
      </div>
    </section>
  )
}
