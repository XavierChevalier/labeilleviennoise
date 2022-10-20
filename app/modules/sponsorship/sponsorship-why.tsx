import Image from 'remix-image'
import AppButton from '../shared/button/app-button'
import illustration from 'app/assets/images/bee-swarm.jpeg'

export default function SponsorshipWhy() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={illustration}
            alt="Ludovic apiculteur"
            className="rounded-md"
          />
        </div>

        <div className="ml-auto place-self-center lg:col-span-7">
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Pourquoi parrainer ?
          </h2>
          <p className="max-w-2xl mb-4 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            En octobre 2021 l’abeille a été élue grande cause 2022.
          </p>
          <p className="max-w-2xl mb-4 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            En effet, ce précieux insecte est aujourd’hui en danger depuis une
            quarantaine d’années.
          </p>
          <p className="max-w-2xl mb-6 lg:mb-8 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            La population d’abeille d’Europe à diminué de plus d’un tiers.
          </p>

          <AppButton type="primary" href="#pricing">
            Je me lance !
          </AppButton>
        </div>
      </div>
    </section>
  )
}
