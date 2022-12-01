import { IKImage } from 'imagekitio-react'
import type { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLElement> {
  name: string
  role: string
  imagePath: string
}

const TeamAvatar: FC<Props> = (props) => (
  <div className="text-center text-gray-500 dark:text-gray-400">
    <IKImage
      className="mx-auto mb-4 rounded-md"
      path={props.imagePath}
      alt={`${props.name} avatar`}
      transformation={[{ height: '175', width: '175' }]}
    />
    <div className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.name}
    </div>
    <div>{props.role}</div>
  </div>
)

export default TeamAvatar
