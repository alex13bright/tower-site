import { AnchorHTMLAttributes, ReactElement } from 'react'

export const ExternalLink = (props: AnchorHTMLAttributes<HTMLElement>): ReactElement => {
  return (
    <a {...props} target="_blank" rel="noreferer nofollow noopener">
      {props.children}
    </a>
  )
}
