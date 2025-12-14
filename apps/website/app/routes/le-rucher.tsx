import { Link } from '@labeilleviennoise/router'
import { buildMeta } from '@labeilleviennoise/seo'
import { IKImage, IKVideo } from 'imagekitio-react'
import ApiarySection from '@/modules/apiary/ApiarySection'
import ApiarySections from '@/modules/apiary/ApiarySections'
import ApiaryStory from '@/modules/apiary/ApiaryStory'

export const meta = buildMeta({
  title: "Le rucher et créations artisanales - L'Abeille Viennoise",
  description:
    "Le rucher et créations artisanales de l'Abeille Viennoise en images.",
})

export default function LeRucher() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
        Le rucher et créations artisanales
      </h1>

      <ApiarySections>
        <ApiarySection
          title="Des visites du rucher"
          description={
            <p className="text-gray-700">
              Nous proposons des visites du rucher de l'Abeille Viennoise.
              Intéressés ?{' '}
              <Link
                to="/contact"
                destination="website"
                className="hover:underline font-bold text-primary-600"
                data-umami-event="rucher:click:link:contact"
              >
                Contactez-nous !
              </Link>
            </p>
          }
        >
          <ApiaryStory>
            <IKImage
              path="images/rucher/formation.jpg"
              alt="Visite du rucher"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory>
            <IKImage
              path="images/rucher/formation3.jpg"
              alt="Visite du rucher"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory>
            <IKImage
              path="images/rucher/formation2.jpg"
              alt="Visite du rucher"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory>
            <IKVideo
              path="images/rucher/formation4.MOV"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory>
            <IKImage
              path="images/rucher/rucher-3.jpg"
              alt="Visite du rucher"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>

        <ApiarySection
          title="Création artisanale d'une ruche Kenyane"
          description={
            <p className="text-gray-700">
              La ruche Kenyane est le choix naturel pour{' '}
              <strong className="font-bold">le bien-être de l'abeille</strong> :
              elle offre un espace très proche de l'habitat naturel des abeilles
              qui sont libres de construire leur ruche comme elles l'entendent.
            </p>
          }
        >
          <ApiaryStory description="Elaboration de la structure">
            <IKImage
              path="images/rucher/ruche-kenyane1.jpg"
              alt="Ruche Kenyane"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Ajout des cadres">
            <IKImage
              path="images/rucher/ruche-kenyane3.jpg"
              alt="Ruche Kenyane"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Cirage de la ruche">
            <IKImage
              path="images/rucher/ruche-kenyane6.jpg"
              alt="Ruche Kenyane"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Résultat final">
            <IKImage
              path="images/rucher/ruche-kenyane5.jpg"
              alt="Ruche Kenyane"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Visite au rucher">
            <IKVideo
              path="images/rucher/ludovic-ruche6.mov"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>

        <ApiarySection
          title="Montage et cirage des barrettes"
          description={
            <p className="text-gray-700">
              Le cirage des barrettes guidera les abeilles et les forcera à{' '}
              <strong className="font-bold">
                construire leurs rayons de façon précise le long des barrettes.
              </strong>{' '}
              <br />
              Ceci permet de ne pas casser l’intégralité de la structure en
              retirant chaque barrette lors de l’ouverture de la ruche.
            </p>
          }
        >
          <ApiaryStory description="Ajout de la cire">
            <IKVideo
              path="images/rucher/cirage-barrette1.mov"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Répartition de la cire">
            <IKVideo
              path="images/rucher/cirage-barrette2.mov"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>

        <ApiarySection title="Visite au rucher">
          <ApiaryStory description="Contrôle des barrettes">
            <IKImage
              path="images/rucher/ludovic-ruche1.jpg"
              alt="Contrôle des barrettes"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Contrôle des barrettes">
            <IKImage
              path="images/rucher/ludovic-ruche2.jpg"
              alt="Contrôle des barrettes"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Contrôle des barrettes">
            <IKImage
              path="images/rucher/ludovic-ruche3.jpg"
              alt="Contrôle des barrettes"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Banane de miel 🍌">
            <IKVideo
              path="images/rucher/ludovic-ruche4.MOV"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Contrôle des barrettes">
            <IKImage
              path="images/rucher/ludovic-ruche5.jpg"
              alt="Contrôle des barrettes"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Le rucher">
            <IKImage
              path="images/rucher/rucher.jpg"
              alt="Rucher"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Filtrage du miel">
            <IKImage
              path="images/rucher/filtre-miel.jpg"
              alt="Filtrage du miel"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Filtrage du miel">
            <IKImage
              path="images/rucher/filtre-miel-2.jpg"
              alt="Filtrage du miel"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>

        <ApiarySection
          title="Abreuvoir pour abeilles"
          description={
            <p className="text-gray-700">
              <strong className="font-bold">
                Un accessoire indispensable au rucher pendant les fortes
                chaleurs.
              </strong>{' '}
              <br />
              Cela permet aux abeilles de parcourir moins de distance pour se
              désaltérer.
            </p>
          }
        >
          <ApiaryStory description="Abreuvoir naturel">
            <IKVideo
              path="images/rucher/abreuvoir1.mp4"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Contrôle du débit d'eau">
            <IKVideo
              path="images/rucher/abreuvoir4.mp4"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Fentes pour boire">
            <IKImage
              path="images/rucher/abreuvoir3.jpg"
              alt="Abreuvoir à abeilles"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Bac d'eau">
            <IKVideo
              path="images/rucher/abreuvoir2.mp4"
              autoPlay
              muted
              loop
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>
      </ApiarySections>
    </div>
  )
}
