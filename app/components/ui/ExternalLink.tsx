import { ReactElement } from 'react'
import { AnchorProps } from '~/core/types'

export const ExternalLink = (props: AnchorProps): ReactElement => {
  return (
    <a {...props} target="_blank" rel="noreferer nofollow noopener">
      {props.children}
    </a>
  )
}
