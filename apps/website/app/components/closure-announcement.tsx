export default function ClosureAnnouncement() {
  return (
    <div className="bg-primary-50 border-b border-primary-200">
      <div className="px-4 py-3 mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-2 items-center text-center md:flex-row md:justify-center md:gap-3">
          <div className="flex-shrink-0">
            <span className="text-2xl">🐝</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary-900 md:text-base">
              <strong className="font-bold">Fermeture définitive</strong>
            </p>
            <p className="mt-1 text-sm text-primary-800 md:text-base">
              C'est avec une grande émotion que nous vous annonçons que{' '}
              <strong className="font-bold">L'Abeille Viennoise</strong> va{' '}
              <strong className="font-bold">fermer ses portes définitivement</strong>.
              <br className="hidden md:inline" />{' '}
              Merci à tous ceux qui ont accompagné notre aventure apicole et qui ont
              partagé notre passion pour ces{' '}
              <strong className="font-bold">merveilleuses créatures</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
