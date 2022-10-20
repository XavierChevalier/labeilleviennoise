import Image from 'remix-image'
import AppButton from '../shared/button/app-button'
import IconArrowRight from '../shared/icons/icon-arrow-right'
import illustration from '@/assets/images/bee-large.png'

export default function HomeHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Devenez parrain
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Aidez au développement de nouvelles colonies d'abeilles et
            participez à leur sauvegarde.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <AppButton href="/parrainage" type="primary">
              Comment ça marche ?
              <IconArrowRight />
            </AppButton>
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={illustration}
            alt="Illustration d'une abeille"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
