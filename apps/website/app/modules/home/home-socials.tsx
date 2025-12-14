import {
  IconFacebook,
  IconInstagram,
  IconMicrophone,
  IconTiktok,
} from '@labeilleviennoise/icons'
import { AppLink, AppLinkExternal } from '@labeilleviennoise/ui'
import CenteredImageContainer from '@/modules/shared/images/centered-image-container'

export default function HomeSocials() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="mr-auto place-self-center md:col-span-6 lg:col-span-7 sm:py-6 lg:px-8">
        <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Retrouvez-nous sur les réseaux sociaux...
          <span className="block text-2xl md:text-3xl xl:text-4xl font-light text-gray-500">
            et ailleurs !
          </span>
        </h2>
        <p className="max-w-2xl py-4 mb-4 font-light text-gray-500 md:mb-6 md:text-md md:text-xl">
          <ul className="space-y-2">
            <li>
              <AppLinkExternal
                href="https://www.instagram.com/labeilleviennoise/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
                data-umami-event="home:click:social:instagram"
              >
                <IconInstagram />
                <strong className="font-bold">Instagram</strong>
              </AppLinkExternal>
            </li>
            <li>
              <AppLinkExternal
                href="https://www.facebook.com/profile.php?id=100090982112033"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
                data-umami-event="home:click:social:facebook"
              >
                <IconFacebook />
                <strong className="font-bold">Facebook</strong>
              </AppLinkExternal>
            </li>
            <li>
              <AppLinkExternal
                href="https://www.tiktok.com/@labeilleviennoise"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
                data-umami-event="home:click:social:tiktok"
              >
                <IconTiktok />
                <strong className="font-bold">TikTok</strong>
              </AppLinkExternal>
            </li>
            <li>
              <AppLink
                to="/interview"
                destination="website"
                className="flex items-center gap-2"
                data-umami-event="home:click:link:interview"
              >
                <IconMicrophone />
                <strong className="font-bold">Interview Radio</strong>
              </AppLink>
            </li>
          </ul>
        </p>
      </div>

      <div className="mx-auto mb-6 md:mb-0 md:mt-0 md:col-span-6 lg:col-span-5 md:flex hidden">
        <CenteredImageContainer>
          <img
            src="https://simplydominus.com/wp-content/uploads/2022/01/test.png"
            alt="Socials"
          />
        </CenteredImageContainer>
      </div>
    </section>
  )
}
