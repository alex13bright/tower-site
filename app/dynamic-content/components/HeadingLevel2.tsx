import { ReactElement } from 'react'
import { slugify } from '~/core/singletons'
import { H2 } from './content'

const parseChildren = (children: ReactElement) => {
  return children.props.children
}

type Heading2Props = {
  children: ReactElement
}

export const HeadingLevel2 = ({ children }: Heading2Props): ReactElement => {
  const title = parseChildren(children)
  const id = slugify(title)

  return <H2 id={id}>{children}</H2>
}
HeadingLevel2.displayName = 'HeadingLevel2'
