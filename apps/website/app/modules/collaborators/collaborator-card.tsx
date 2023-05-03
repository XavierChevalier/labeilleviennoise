import type { FC, HTMLProps, ReactElement } from 'react'

interface Props extends HTMLProps<HTMLElement> {
  imageSrc: string
  imgAlt: string
  description: ReactElement | string
}

const CollaboratorCard: FC<Props> = (props) => (
  <div className="bg-white max-w-xs rounded-md overflow-hidden shadow-xl pt-4 px-4 flex-1 flex flex-col">
    <img
      src={props.imageSrc}
      alt={props.imgAlt}
      className="rounded-lg w-full pt-4 px-4"
    />
    <div className="py-4 px-6">
      <p className="text-gray-700 mt-2 text-left">{props.description}</p>
    </div>
    <div className="h-px bg-gray-200 mt-auto"></div>
    <div className="py-4 px-6 mx-auto">{props.children}</div>
  </div>
)

export default CollaboratorCard
