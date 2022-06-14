import { ReactNode } from 'react'

type ExternalLinkProps = {
  className?: string
  children: ReactNode
  href: string
}
export const ExternalLink = ({ className, children, href }: ExternalLinkProps) => {
  return (
    <a className={className} href={href} target="_blank" rel="noreferer nofollow noopener">
      {children}
    </a>
  )
}
// export const ExternalLink = styled.a.attrs({
//   target: '_blank',
//   rel: 'nofollow noopener',
// })
