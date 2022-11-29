import { IKImage } from 'imagekitio-react'
import ApiaryStory from '@/modules/apiary/ApiaryStory'
import IconQuotes from '@/modules/shared/icons/icon-quotes'

export default function TeamHero() {
  return (
    <div className="flex-wrap flex-1 lg:flex lg:flex-nowrap lg:h-[28rem] items-center">
      <div className="grid gap-5 grid-flow-col mb-8 lg:mb-0 text-right items-center lg:w-1/2">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white text-right grid justify-items-end">
          <IconQuotes mirror={true} />
          <p>
            "L'impression de tenir le monde au creux de la main 🐝"
            <br />
            Une réelle prise de conscience et une véritable passion qui ne
            cessent de croître Je suis admirative de l'univers des abeilles et
            j'ai appris à m'en approcher aujourd'hui me voici devenue
            apicultrice.
          </p>
        </blockquote>
        <ApiaryStory description="Anne-Marie">
          <IKImage
            className="mx-auto max-h-[26rem] rounded-md"
            path="images/anne-marie.jpg"
            alt="Anne-Marie tenant une grappe d'abeilles"
            lqip={{ active: true, quality: 10 }}
            transformation={[{ height: '400', width: '225' }]}
          />
        </ApiaryStory>
      </div>
      <span className="hidden lg:block w-px h-3/5 mx-10 bg-primary-500" />
      <div className="grid gap-5 grid-flow-col text-left items-center lg:w-1/2">
        <IKImage
          className="mx-auto max-h-[26rem] rounded-md"
          path="images/ludovic.jpg"
          alt="Ludovic en tenue d'apiculteur"
          lqip={{ active: true, quality: 10 }}
          transformation={[{ height: '400', width: '225' }]}
        />
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white text-left">
          <IconQuotes />
          <p>
            Apiculteur passionné, je souhaite protéger nos butineuses dans le
            respect de leur environnement. Je lutte régulièrement contre leur
            principal prédateur, le frelon asiatique.
          </p>
        </blockquote>
      </div>
    </div>
  )
}
