import { AnchorHTMLAttributes, ReactElement } from 'react'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>
export const ExternalLink = (props: LinkProps): ReactElement => {
  return (
    <a {...props} target="_blank" rel="noreferer nofollow noopener">
      {props.children}
    </a>
  )
}
