import type { FC, HTMLProps, ReactElement } from 'react'

interface BaseProps extends HTMLProps<HTMLElement> {
  description: ReactElement | string
}

interface ImageProps extends BaseProps {
  type: 'image'
  imageSrc: string
  imgAlt: string
}

interface SvgProps extends BaseProps {
  type: 'svg'
  svg: ReactElement
}

type Props = ImageProps | SvgProps

const CollaboratorCard: FC<Props> = (props) => (
  <div className="bg-white max-w-xs rounded-md overflow-hidden shadow-xl pt-4 px-4 flex-1 flex flex-col">
    <div className="mb-4">
      {props.type === 'image' ? (
        <img
          src={props.imageSrc}
          alt={props.imgAlt}
          className="rounded-lg w-full pt-4 px-4"
        />
      ) : (
        <div className="rounded-lg w-full pt-4 px-4 flex items-center justify-center">
          <div className="w-[200px] h-[100px] flex items-center justify-center">
            {props.svg}
          </div>
        </div>
      )}
    </div>
    <div className="py-4 px-6">
      <p className="text-gray-700 mt-2 text-left">{props.description}</p>
    </div>
    <div className="h-px bg-gray-200 mt-auto"></div>
    <div className="py-4 px-6 mx-auto">{props.children}</div>
  </div>
)

export default CollaboratorCard
