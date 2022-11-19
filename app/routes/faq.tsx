import QuestionAnswer from '@/modules/faq/question-answer'
import AppLink from '@/modules/shared/link/app-link'

export default function Faq() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Foire aux questions
      </h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
        <div>
          <QuestionAnswer question="Quand obtiendrais-je mes récompenses de parrainage ?">
            Les récompenses sont annuelles seulement. Elles sont envoyées au
            bout de douze paiements mensuels ou immédiatement après avoir choisi
            la formule annuelle.
          </QuestionAnswer>
        </div>
      </div>

      <p className="text-center">
        Vous avez toujours une question ?{' '}
        <AppLink to="/contact">Par ici !</AppLink>
        <br />
        Nous vous répondrons dans les plus brefs délais.
      </p>
    </div>
  )
}
