import { Link } from '@remix-run/react'
import { useContext } from 'react'
import FooterLink from './footer-link'
import NavigationFooterSocialNetworkLink from './navigation-footer-social-network-link'
import IconFacebook from '@/modules/shared/icons/icon-facebook'
import IconInstagram from '@/modules/shared/icons/icon-instagram'
import LogoWithTextInline from '@/modules/shared/logo/logo-with-text-inline'
import { EnvContext } from '@/root'

export default function NavigationFooter() {
  const { PUBLIC_FACEBOOK_URL, PUBLIC_INSTAGRAM_URL } = useContext(EnvContext)
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link prefetch="none" to="/">
              <LogoWithTextInline />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 text-right">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Ressources
              </h2>
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
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Entreprise
              </h2>
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
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{' '}
            <FooterLink to="/">L'Abeille Viennoise</FooterLink>. Tous droits
            réservés.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
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
