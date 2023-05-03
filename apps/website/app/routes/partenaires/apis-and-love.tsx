import { buildMeta } from '@labeilleviennoise/seo'
import { IKImage } from 'imagekitio-react'

export const meta = buildMeta({
  title: 'Apis and Love',
  description:
    'Apis & Love est un fond de dotation visant à la protection des abeilles et la biodiversité.',
})

export default function ApisAndLove() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h1 className="mb-4">
        <a href="https://apisandlove.com" target="_blank" rel="noreferrer">
          <IKImage
            path="images/partenariat/apis-and-love/apis-and-love_logo.svg"
            alt="Apis & Love logo"
            className="mx-auto h-24"
            lqip={{ active: true, quality: 10 }}
          />
        </a>
      </h1>
      <section className="min-h-[360px] md:min-h-[500px] flex flex-col gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="md:order-2">
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Apis & Love est un{' '}
            <strong className="font-bold">fond de dotation</strong> visant à la{' '}
            <strong className="font-bold">
              protection des abeilles et la biodiversité
            </strong>
            . Face à l'extinction inquiétante des abeilles sur le territoire,
            nous avons l'envie d'
            <strong className="font-bold">agir ensemble</strong>.
          </p>
        </div>
        <IKImage
          path="images/partenariat/apis-and-love/apis-and-love_inspection.jpg"
          alt="Apiculteurs inspectant des ruches"
          className="rounded-lg md:order-1"
          lqip={{ active: true, quality: 10 }}
          transformation={[
            {
              width: '700',
              height: '700',
            },
          ]}
        />
      </section>

      <section className="min-h-[360px] md:min-h-[500px] flex flex-col gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="md:order-1">
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Ils ont pour but de{' '}
            <strong className="font-bold">sensibiliser</strong> un maximum de
            personnes{' '}
            <strong className="font-bold">
              vis-à-vis de l'apiculture et des abeilles.
            </strong>{' '}
            Petits et grands assistent à des interventions faites par leurs
            apiculteurs partenaires.
          </p>
        </div>
        <IKImage
          path="images/partenariat/apis-and-love/apis-and-love_formation.jpg"
          alt="Formation d'apiculteurs et sensibilisation des enfants"
          className="rounded-lg md:order-2"
          lqip={{ active: true, quality: 10 }}
          transformation={[
            {
              width: '700',
              height: '700',
            },
          ]}
        />
      </section>

      <section className="min-h-[360px] md:min-h-[500px] flex flex-col gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="md:order-2">
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            L'apiculture joue un rôle essentiel dans la{' '}
            <strong className="font-bold">préservation de l'écosystème.</strong>{' '}
            La soutenir par des actions simples est accessible à tous.
          </p>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            <strong className="font-bold">
              Devenir membre, effectuer un don ou encore intervenir
            </strong>{' '}
            en tant que partenaire{' '}
            <strong className="font-bold">représente un grand pas</strong> pour
            aider nos amies les abeilles.
          </p>
        </div>
        <IKImage
          path="images/partenariat/apis-and-love/apis-and-love_equipe.jpg"
          alt="Mains entrelacées; esprit d'équipe"
          className="rounded-lg md:order-1"
          lqip={{ active: true, quality: 10 }}
          transformation={[
            {
              width: '700',
              height: '700',
            },
          ]}
        />
      </section>

      <section className="min-h-[360px] md:min-h-[500px] flex flex-col gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="md:order-1">
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Apis & Love{' '}
            <strong className="font-bold">
              organise des actions et interventions
            </strong>{' '}
            auprès d'un large public. Leur dynamique est de{' '}
            <strong className="font-bold">créer des liens</strong> entre tous
            les acteurs de la société afin que chacun soit{' '}
            <strong className="font-bold">
              sensibilisé à la cause des abeilles.
            </strong>{' '}
            Dans une démarche de synergie permanente,{' '}
            <strong className="font-bold">
              leur plateforme met en relation les particuliers, les entreprises
              et les apiculteurs
            </strong>{' '}
            afin de susciter des initiatives communes pour la préservation des
            abeilles.
          </p>
        </div>
        <IKImage
          path="images/partenariat/apis-and-love/apis-and-love_intervention.jpg"
          alt="Apis & Love intervention dans un collège"
          className="rounded-lg md:order-2"
          lqip={{ active: true, quality: 10 }}
          transformation={[
            {
              width: '700',
              height: '700',
            },
          ]}
        />
      </section>

      <p className="mb-6 font-light text-gray-500 md:text-lg text-center">
        <strong className="font-bold">Comment pouvez-vous agir ?</strong>
        <br />
        <a
          href="https://www.apisandlove.com/qui-sommes-nous"
          target="_blank"
          className="relative font-medium underline text-primary-600 hover:no-underline"
          rel="noreferrer"
        >
          On vous en dit plus juste ici !
        </a>
      </p>
    </div>
  )
}
