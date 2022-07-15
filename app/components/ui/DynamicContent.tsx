import { P, UL, A, H1, H2, H3, Img, LI, Injection } from '~/components/common/content'
import { ExpandableTable } from '~/components/common/ExpandableTable'

import { ReactElement } from 'react'
import JsxParser from 'react-jsx-parser'
import styled from 'styled-components'

const StyledJsxParser = styled(JsxParser)`
  display: grid;
`

type Props = {
  content: string
  className?: string
}

export const DynamicContent = ({ content, className }: Props): ReactElement => {
  const bindings = {
    // data: 'real_data',
    // myEventHandler: () => {},
  }
  console.log(content)
  return (
    <StyledJsxParser
      className={className}
      bindings={bindings}
      components={{ P, UL, H1, H2, H3, Img, LI, A, Injection, Table: ExpandableTable } as any}
      jsx={content}
    />
  )
}
