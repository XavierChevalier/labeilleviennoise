import { Link } from '@remix-run/react'
import { DarkThemeToggle } from 'flowbite-react'
import { useContext } from 'react'
import FooterLink from '@/modules/navigation/footer/footer-link'
import NavigationFooterSocialNetworkLink from '@/modules/navigation/footer/navigation-footer-social-network-link'
import IconFacebook from '@/modules/shared/icons/icon-facebook'
import IconInstagram from '@/modules/shared/icons/icon-instagram'
import LogoWithTextHorizontal from '@/modules/shared/logo/logo-with-text-horizontal'
import LogoWithTextVertical from '@/modules/shared/logo/logo-with-text-vertical'
import { EnvContext } from '@/root'

export default function NavigationFooter() {
  const { PUBLIC_FACEBOOK_URL, PUBLIC_INSTAGRAM_URL } = useContext(EnvContext)

  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="sm:flex justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <Link prefetch="none" to="/">
              <LogoWithTextVertical className="hidden sm:flex" />
              <LogoWithTextHorizontal className="sm:hidden justify-center" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 justify-items-center">
            <section className="sm:text-right">
              <div className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Ressources
              </div>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <FooterLink to="/">Accueil</FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink to="/faq">Foire aux questions</FooterLink>
                </li>
                <li>
                  <FooterLink to="/contact">Contactez-nous</FooterLink>
                </li>
              </ul>
            </section>
            <section className="text-right">
              <div className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Entreprise
              </div>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <FooterLink to="/equipe">Notre équipe</FooterLink>
                </li>
                <li className="mb-4">
                  <FooterLink to="/mentions-legales">
                    Mentions légales
                  </FooterLink>
                </li>
                <li>
                  <FooterLink
                    to="/conditions-generales-vente"
                    title="Conditions Générales de Vente"
                  >
                    C. G. V.
                  </FooterLink>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()}{' '}
            <FooterLink to="/">L'Abeille Viennoise</FooterLink>. Tous droits
            réservés.
          </span>
          <div className="flex space-x-6 justify-center">
            <DarkThemeToggle />
            <NavigationFooterSocialNetworkLink href={PUBLIC_FACEBOOK_URL}>
              <IconFacebook />
            </NavigationFooterSocialNetworkLink>
            <NavigationFooterSocialNetworkLink href={PUBLIC_INSTAGRAM_URL}>
              <IconInstagram />
            </NavigationFooterSocialNetworkLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
