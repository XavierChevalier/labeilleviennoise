import { buildMeta } from '@labeilleviennoise/seo'
import { AppLink } from '@labeilleviennoise/ui'
import QuestionAnswer from '@/modules/faq/question-answer'

export const meta = buildMeta({
  title: "Foire aux questions - L'Abeille Viennoise",
  description:
    "Vous avez des questions sur l'apiculture, les abeilles, les produits de l'Abeille Viennoise ? Vous trouverez peut-être la réponse dans notre foire aux questions.",
})

export default function Faq() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-primary text-center">
        Foire aux questions
      </h1>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
        <div>
          <QuestionAnswer question="D'où provient le miel ?">
            <p>
              Nos ruches sont principalement installées sur Vienne, en Isère.
              Nous les déplaçons sur le{' '}
              <strong className="font-bold">secteur Rhône Alpes</strong>, en
              fonction des floraisons et des saisons.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question="Comment est extrait le miel ?">
            <p>
              Nous procédons aujourd'hui à une extraction manuelle du miel. Vous
              pouvez voir les étapes d’extraction du miel sur la page{' '}
              <AppLink to="/la-miellerie" destination="website">
                La Miellerie
              </AppLink>
              .
            </p>
          </QuestionAnswer>
          <QuestionAnswer
            question={<p>Comment sont réalisées les bougies ?</p>}
          >
            <p>
              Pour les bougies, nous utilisons la cire de nos abeilles que nous
              conservons après récolte, nous la filtrons et la purifions avant
              de la travailler sous forme de bougies.
            </p>
          </QuestionAnswer>
        </div>
        <div>
          <QuestionAnswer question={<p>Qu’est-ce qu’ un Bee-Wrap ?</p>}>
            <p>
              Il s’agit d’un{' '}
              <strong className="font-bold">
                emballage 100% coton réutilisable
              </strong>{' '}
              enduit de la cire de nos abeilles. Ce dernier a pour but de{' '}
              <strong className="font-bold">
                remplacer le film alimentaire
              </strong>
              .
              <br />
              L'entretien est simple, un peu d’eau froide savonneuse, rincer,
              laisser sécher à plat et réutiliser autant de fois que possible.
              Il est confectionné par nos soins dans la miellerie.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question={<p>Les autres créations artisanales</p>}>
            <p>
              Nous proposons{' '}
              <strong className="font-bold">
                des sujets réalisés au crochet
              </strong>{' '}
              par nos soins.
              <br />
              Principalement confectionnés en fil acrylique rembourrage ouate
              polyester, ils sont lavables en machine à 30°.
              <br />
              Tous les modèles présentés sont{' '}
              <strong className="font-bold">
                uniques et personnalisables
              </strong>{' '}
              sur commande et peuvent être réalisés en plusieurs exemplaires. Le
              stock étant limité, il est préférable de commander.
            </p>
          </QuestionAnswer>
        </div>
      </div>

      <p className="text-center">
        Vous avez toujours une question ?{' '}
        <AppLink to="/contact" destination="website">
          Par ici !
        </AppLink>
        <br />
        Nous vous répondrons dans les plus brefs délais.
      </p>
    </div>
  )
}
