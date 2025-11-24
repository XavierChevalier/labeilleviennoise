import { Link } from '@labeilleviennoise/router'

export default function CollaboratorsSection() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold">
        Nos collaborateurs
      </h2>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 mx-auto max-w-screen-xl xl:gap-16 lg:px-6 items-center">
        <a
          href="https://vienne.fr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://vienne.fr/wp-content/uploads/2020/08/logo_vienne.png"
            alt="Logo de la Ville de Vienne"
            className="max-h-24 object-contain"
          />
        </a>

        <Link
          to="/apis-and-love"
          destination="website"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://apisandlove.com/wp-content/uploads/2023/06/ApisandLove-RVB-300x105.webp"
            alt="Apis & Love logo"
            className="max-h-20 object-contain"
          />
        </Link>

        <a
          href="https://www.advivo.fr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://www.advivo.fr/wp-content/themes/advivo/dist/images/Advivo_logo_a94eee12.svg"
            alt="Logo d'Advivo"
            className="max-h-24 object-contain"
          />
        </a>

        <a
          href="https://www.vienne-condrieu.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 149.165 67.232"
            className="max-h-24 w-auto h-24"
          >
            <path
              fill="#d6a65b"
              d="M113.6 67.231v-2.55h35.562v2.55zM86.949 43.809v-2.55h14.389v2.55z"
            />
            <path
              fill="#303a52"
              d="M21.247 42.678c-1.357-3.452-4.15-6.658-8.425-6.658-4.807 0-6.862 4.357-6.862 9.782 0 6.946 2.794 12.37 8.549 12.37a9.68 9.68 0 0 0 8.753-4.767l.616.412c-1.809 4.273-5.589 9.164-11.877 9.164-7.4 0-12-5.548-12-13.6A14.92 14.92 0 0 1 15.37 34.337h6.412v8.343h-.534Zm12.29 20.301c-4.865 0-7.434-3.94-7.434-8.051 0-4.421 2.98-9.56 9.354-9.56 4.865 0 7.434 3.94 7.434 8.051 0 4.419-2.98 9.558-9.354 9.558Zm-3.084-11.171c0 5.344 1.953 9.867 4.967 9.867 2.536 0 3.186-3.357 3.186-5.139 0-5.345-1.987-9.867-5-9.867-2.843 0-3.151 3.084-3.151 5.139Zm25.318 10.76 2.466-2.945v-7.607c0-2.638-.377-4.317-3.015-4.317a4.48 4.48 0 0 0-3.667 2.022v9.9l2.466 2.945h-9.18l2.6-2.945v-9.25l-2.33-2.638 6.441-2.3v3.119a6.81 6.81 0 0 1 5.652-3.186c3.5 0 5.139 2.261 5.139 5.481v8.771l2.6 2.945h-9.172Zm22.99-3.05a5.92 5.92 0 0 1-5.242 3.392c-4.488 0-6.681-3.94-6.681-8.051 0-4.419 2.809-9.079 9.046-9.079h2.878v-2.946l-2.33-2.638 6.441-1.953v21.926l2.536 2.4-6.647.308V59.52Zm0-10.45a5.84 5.84 0 0 0-4.213-2.089c-3.015 0-3.632 2.707-3.632 4.762 0 5.344 2.364 7.4 5.277 7.4a3.8 3.8 0 0 0 2.57-.856v-9.217Zm22.303 2.776c-1.508-3.6-3.528-4.8-5.1-4.8-2.364 0-2.364 1.712-2.364 5.208v7.366l3.186 2.945h-9.837l2.536-2.945v-11.2l-2.33-2.638h14.184v6.064h-.273Zm8.29-6.406v18.85l2.536 2.945h-9.183l2.536-2.945V50.373l-2.33-2.638 6.441-2.3Zm19.187 7.468h-11c.377 4.419 2.742 6.27 5.414 6.27 2.33 0 4.385-1.166 4.9-2.6l.514.206c-1.233 3.117-3.667 6.27-7.743 6.27-4.488 0-7.024-4.009-7.024-8.121 0-4.421 2.742-9.49 8.325-9.49 4.077 0 6.578 2.741 6.612 7.366l.035.069h-.035v.035Zm-4.421-1.337c0-3.667-1.474-5.1-2.98-5.1-2.6 0-3.667 3.117-3.667 5.173v.24h6.647v-.308Zm12.332 4.69c0 2.638.377 4.317 3.015 4.317a4.4 4.4 0 0 0 3.255-1.61v-10.24l-2.536-2.98h6.647v14.013l2.33 2.809-6.441.206v-2.741a6.12 6.12 0 0 1-5.242 2.878c-3.5 0-5.139-2.261-5.139-5.481V44.239l-2.57-2.98h6.681v15.006Z"
            />
            <path
              fill="#d6a65b"
              d="m104.248 40.674 2.947-3.151 2.913 3.151-2.913 3.186zm-65.199-7.818v-2.55h47.373v2.55z"
            />
            <path
              fill="#303a52"
              d="M22.688 3.554 19.174 0h8.636l-2.893 3.678-9.876 25.454h-1.984L2.149 2.437 0 0h11.281L7.975 2.521l7.19 18.141.535 1.938Zm31.298 15.232h-11c.377 4.419 2.741 6.27 5.414 6.27 2.33 0 4.385-1.166 4.9-2.6l.514.206c-1.233 3.117-3.665 6.27-7.743 6.27-4.488 0-7.024-4.009-7.024-8.121 0-4.421 2.741-9.49 8.325-9.49 4.077 0 6.578 2.741 6.612 7.366l.035.069h-.035Zm-4.419-1.337c0-3.667-1.474-5.1-2.98-5.1-2.6 0-3.667 3.117-3.667 5.173v.24h6.647v-.308Zm17.095 10.977 2.466-2.945v-7.608c0-2.638-.377-4.317-3.015-4.317a4.48 4.48 0 0 0-3.666 2.024v9.9l2.466 2.945h-9.182l2.6-2.945v-9.25l-2.33-2.638 6.441-2.3v3.119a6.81 6.81 0 0 1 5.654-3.186c3.494 0 5.139 2.261 5.139 5.481v8.774l2.6 2.945h-9.183Zm21.48 4.43 2.466-2.945V17.872c0-2.638-.377-4.317-3.015-4.317a4.47 4.47 0 0 0-3.665 2.022v9.9l2.466 2.945h-9.181l2.6-2.945v-9.245l-2.33-2.638 6.441-2.3v3.119a6.81 6.81 0 0 1 5.652-3.186c3.5 0 5.139 2.261 5.139 5.481v13.2l2.6 2.945h-9.182Zm25.663-14.07h-11c.377 4.419 2.741 6.27 5.414 6.27 2.33 0 4.385-1.166 4.9-2.6l.514.206c-1.233 3.117-3.667 6.27-7.744 6.27-4.488 0-7.024-4.009-7.024-8.121 0-4.421 2.741-9.49 8.325-9.49 4.077 0 6.578 2.741 6.612 7.366l.035.069h-.035v.035Zm-4.421-1.337c0-3.667-1.474-5.1-2.98-5.1-2.6 0-3.667 3.117-3.667 5.173v.24h6.647v-.308Z"
            />
            <path
              fill="#d6a65b"
              d="m32.64 9.709-2.945-3.186 2.945-3.151 2.913 3.151z"
            />
            <path
              fill="#303a52"
              d="M34.799 11.286V29.91l2.536 2.945h-9.181l2.534-2.945V16.219l-2.33-2.638Z"
            />
          </svg>
        </a>

        <a
          href="https://www.zoelie-fabrik.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://static.wixstatic.com/media/13c7c7_d6303f88527b4dec95b3391b768b9998~mv2.png"
            alt="Logo de la Fabrik de Zoélie"
            className="max-h-24 object-contain"
          />
        </a>

        <a
          href="https://www.savondelozon.fr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://www.savondelozon.fr/wp-content/uploads/logo-savon-ozon.png"
            alt="Logo des Savons de l'Ozon"
            className="max-h-24 object-contain"
          />
        </a>

        <a
          href="https://pepinieres-mainaud.fr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://pepinieres-mainaud.fr/wd/images/logo-de-pepiniere-mainaud.svg?1694532474"
            alt="Logo des Pepinieres Mainaud"
            className="max-h-24 object-contain"
          />
        </a>

        <a
          href="https://arbres-and-co.fr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://arbres-and-co.fr/wd/images/image-du-logo-arbre-and-co.svg?1684138089"
            alt="Logo d'Arbres & Co"
            className="max-h-24 object-contain"
          />
        </a>

        <a
          href="https://gateauxetcbynath.fr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src="https://i0.wp.com/gateauxetcbynath.fr/wp-content/uploads/elementor/thumbs/GATEAUXETC-gateauxdesign-blanc-q7nx7av57f1swv2ssau6pyvgmcztmg1ja701zdpbco.png?ssl=1"
            alt="Logo de Gateaux etc by Nath"
            className="max-h-24 object-contain invert"
          />
        </a>
      </section>
    </div>
  )
}
