import { P } from '~/components/common/content'
// Within your component's render method, bind these components and the fragment as props

import { ReactElement } from 'react'
import JsxParser from 'react-jsx-parser'
import styled from 'styled-components'

const StyledJsxParser = styled(JsxParser)`
  display: grid;
`

type Props = {
  className?: string
}

export const DynamicContent = ({ className }: Props): ReactElement => {
  const bindings = {
    data: 'real_data',
    myEventHandler: () => {},
  }
  return (
    <StyledJsxParser
      className={className}
      bindings={bindings}
      components={{ P }}
      jsx={`<P>hey</P>`}
    />
  )
}
