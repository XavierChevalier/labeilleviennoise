import { IKImage } from 'imagekitio-react'

export default function TeamSection() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Notre équipe
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          L'Abeille Viennoise c'est nous, mais c'est aussi eux...
        </p>
      </div>
      <div className="grid gap-8 lg:gap-16 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <IKImage
            className="mx-auto mb-4 rounded-md"
            path="images/team/xavier.jpeg"
            alt="Xavier"
            transformation={[{ height: '175', width: '175' }]}
          />
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Xavier
          </h3>
          <p>Développeur</p>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <IKImage
            className="mx-auto mb-4  rounded-md"
            path="images/team/nicolas.jpg"
            alt="Nicolas"
            transformation={[{ height: '175', width: '175' }]}
          />
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nicolas
          </h3>
          <p>Développeur</p>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <IKImage
            className="mx-auto mb-4 rounded-md"
            path="images/team/steffie.jpg"
            alt="Steffie"
            transformation={[{ height: '175', width: '175' }]}
          />
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Steffie
          </h3>
          <p>Petites mains</p>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <IKImage
            className="mx-auto mb-4 rounded-md"
            path="images/team/perrine.jpg"
            alt="Perrine"
            transformation={[{ height: '175', width: '175' }]}
          />
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Perrine
          </h3>
          <p>Petites mains</p>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <img
            className="mx-auto mb-4 w-[175px] h-[175px] rounded-md"
            src="https://cdn.discordapp.com/avatars/617764907357569045/10b23d14dca9191840bc6c7507a31fc7.webp"
            alt="Morgane"
          />
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Morgane
          </h3>
          <p>Design</p>
        </div>
      </div>
    </div>
  )
}
