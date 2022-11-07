import { IKImage, IKVideo } from 'imagekitio-react'
import ApiarySection from '@/modules/apiary/ApiarySection'
import ApiarySections from '@/modules/apiary/ApiarySections'
import ApiaryStory from '@/modules/apiary/ApiaryStory'
import AppButton from '@/modules/shared/button/app-button'
import IconArrowRight from '@/modules/shared/icons/icon-arrow-right'

export default function LeRucher() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 max-w-screen-xl mx-auto">
      <h1 className="max-w-2xl my-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mx-auto text-center text-primary">
        Le rucher et créations artisanales
      </h1>

      <ApiarySections>
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
              autoPlay={true}
              muted={true}
              loop={true}
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>

        <ApiarySection title="Création artisanale de ruches personnalisées">
          <ApiaryStory description="Xavier">
            <IKImage
              path="images/rucher/ruche-personnalisee1.jpg"
              alt="Ruche personnalisée avec le prénom Xavier"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Marie">
            <IKImage
              path="images/rucher/ruche-personnalisee2.jpg"
              alt="Ruche personnalisée avec le prénom Marie"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Perrine">
            <IKImage
              path="images/rucher/ruche-personnalisee3.jpg"
              alt="Ruche personnalisée avec le prénom Perrine"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Nicolas">
            <IKImage
              path="images/rucher/ruche-personnalisee4.jpg"
              alt="Ruche personnalisée avec le prénom Nicolas"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="La ruche Marie en activité">
            <IKVideo
              path="images/rucher/abeilles-entrant-ruche.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
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
              Ceci permet de ne pas casser l’intégralité de la structure en
              retirant chaque barrette lors de l’ouverture de la ruche.
            </p>
          }
        >
          <ApiaryStory description="Ajout de la cire">
            <IKVideo
              path="images/rucher/cirage-barrette1.mov"
              autoPlay={true}
              muted={true}
              loop={true}
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Répartition de la cire">
            <IKVideo
              path="images/rucher/cirage-barrette2.mov"
              autoPlay={true}
              muted={true}
              loop={true}
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
              autoPlay={true}
              muted={true}
              loop={true}
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
        </ApiarySection>

        <ApiarySection
          title="Abreuvoir pour abeilles"
          description={
            <p className="text-gray-700">
              <strong className="font-bold">
                Un accessoire indispensable au rucher pendant les fortes
                chaleurs.
              </strong>{' '}
              Cela permet aux abeilles de parcourir moins de distance pour se
              désaltérer.
            </p>
          }
        >
          <ApiaryStory description="Abreuvoir naturel">
            <IKVideo
              path="images/rucher/abreuvoir1.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Contrôle du débit d'eau">
            <IKVideo
              path="images/rucher/abreuvoir4.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
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
              autoPlay={true}
              muted={true}
              loop={true}
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>

        <ApiarySection
          title="Des formations et visites du rucher"
          description={
            <p className="text-gray-700">
              Nous proposerons <strong className="font-bold">bientôt</strong>{' '}
              des visites et formations du rucher de l'Abeille Viennoise. Pour
              le moment, nous formons l'équipe !
            </p>
          }
        >
          <ApiaryStory description="Steffie et Xavier">
            <IKImage
              path="images/rucher/formation.jpg"
              alt="Formation"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Steffie et Xavier">
            <IKImage
              path="images/rucher/formation3.jpg"
              alt="Formation"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Yohann et Perrine">
            <IKImage
              path="images/rucher/formation2.jpg"
              alt="Formation"
              lqip={{ active: true, quality: 10 }}
              loading="lazy"
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>

          <ApiaryStory description="Sergine">
            <IKVideo
              path="images/rucher/formation4.MOV"
              autoPlay={true}
              muted={true}
              loop={true}
              transformation={[{ width: '400', height: '560' }]}
            />
          </ApiaryStory>
        </ApiarySection>
      </ApiarySections>

      <section className="my-8 flex">
        <div className="mr-auto order-2 md:order-1 place-self-center md:col-span-6 lg:col-span-7">
          <h3 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
            Vous souhaitez soutenir le projet ?<br />
            Devenez parrain d'une ruche !
          </h3>

          <div className="flex flex-col gap-4 sm:flex-row">
            <AppButton href="/parrainage" type="primary">
              Comment ça marche ?
              <IconArrowRight />
            </AppButton>
          </div>
        </div>

        <div className="hidden mx-auto mb-6 md:mb-0 order-1 md:order-2 md:mt-0 md:col-span-6 lg:col-span-5 md:flex">
          <IKImage
            path="images/bee-large.png"
            alt="Illustration d'une abeille"
            className="min-w-[400px] max-h-[293px]"
            transformation={[{ width: '400' }]}
          />
        </div>
      </section>
    </div>
  )
}