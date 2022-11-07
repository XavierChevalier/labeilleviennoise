import type { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const ApiarySections: FC<Props> = (props) => (
  <div className="flex flex-col gap-12">{props.children}</div>
)

export default ApiarySections
