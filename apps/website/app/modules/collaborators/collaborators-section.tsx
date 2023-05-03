import { AppLinkButton } from '@labeilleviennoise/ui'
import CollaboratorCard from '@/modules/collaborators/collaborator-card'

export default function CollaboratorsSection() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm mb-4">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Nos collaborateurs
        </h2>
        <p className="font-light text-gray-500 sm:text-xl">
          Découvrez nos partenaires
        </p>
      </div>

      <section className="min-h-[360px] md:min-h-[500px] flex flex-col items-stretch gap-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-3 lg:px-6">
        <CollaboratorCard
          imageSrc="https://vienne.fr/wp-content/uploads/2020/08/logo_vienne.png"
          imgAlt="Logo de la Ville de Vienne"
          description={
            <div>
              <b>Un immense merci</b> pour votre <b>soutien précieux</b> lors de
              nos premiers pas ! C'est <b>grâce à vous</b> que nous avons pu{' '}
              <b>installer nos ruches</b> dans un <b>environnement idéal</b>{' '}
              pour nos abeilles, leur permettant ainsi de{' '}
              <b>butiner et de produire le meilleur miel</b> possible. Nous
              sommes très reconnaissants pour votre aide qui nous a permis de
              démarrer <b>notre rêve apicole</b>.
            </div>
          }
        >
          <a
            href="https://vienne.fr"
            target="_blank"
            rel="noreferrer"
            className="text-white bg-primary hover:bg-primary-500 focus:ring-primary-300 relative inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg focus:ring-4"
          >
            En savoir plus
          </a>
        </CollaboratorCard>

        <CollaboratorCard
          imageSrc="https://www.apisandlove.com/img/front/logo.svg"
          imgAlt="Apis & Love logo"
          description={
            <div>
              Waouh, <b>nous sommes tellement reconnaissants</b> de votre{' '}
              <b>immense générosité</b> durant notre campagne de crowdfunding !{' '}
              <b>Grâce à votre don</b>, nous avons les moyens d'
              <b>étendre notre mignonne petite famille d'abeilles</b> avec de
              toutes nouvelles ruches. Nous formons une équipe <b>formidable</b>
              , <b>engagée</b> dans la <b>protection</b> de ces merveilleuses{' '}
              <b>petites créatures</b> qui jouent un <b>rôle crucial</b> dans
              notre écosystème.
            </div>
          }
        >
          <AppLinkButton
            variant="primary"
            to="/apis-and-love"
            destination="website"
          >
            En savoir plus
          </AppLinkButton>
        </CollaboratorCard>

        <CollaboratorCard
          imageSrc="https://www.advivo.fr/wp-content/themes/advivo/dist/images/Advivo_logo_a94eee12.svg"
          imgAlt="Logo d'Advivo"
          description={
            <div>
              Notre projet d'<b>apiculture urbaine</b> ne serait pas devenu
              réalité sans <b>votre précieux soutien</b>, et{' '}
              <b>nous sommes extrêmement reconnaissants</b> ! Grâce à vous, nous
              avons réussi à installer des ruches{' '}
              <b>sur les toits de la ville</b>, et nous pourrons bientôt
              récolter notre propre miel urbain. Nous sommes{' '}
              <b>impatients de partager</b> avec vous{' '}
              <b>le fruit de notre travail</b> et de <b>notre passion</b> pour
              l'apiculture. Encore une fois, un{' '}
              <b>grand merci pour votre soutien</b> incroyable !
            </div>
          }
        >
          <a
            href="https://www.advivo.fr"
            target="_blank"
            rel="noreferrer"
            className="text-white bg-primary hover:bg-primary-500 focus:ring-primary-300 relative inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center rounded-lg focus:ring-4"
          >
            En savoir plus
          </a>
        </CollaboratorCard>
      </section>
    </div>
  )
}
