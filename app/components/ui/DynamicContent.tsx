import { P } from '~/components/common/content'
// Within your component's render method, bind these components and the fragment as props

import { ReactElement } from 'react'
import JsxParser from 'react-jsx-parser'
import styled from 'styled-components'
import { BonusFeed } from '~/components/common/BonusFeed'

const StyledJsxParser = styled(JsxParser)`
  display: grid;
`

type Props = {
  className?: string
}

export const DynamicContent = ({ className }: Props): ReactElement => {
  const bindings = {
    // data: 'real_data',
    // myEventHandler: () => {},
  }
  return (
    <StyledJsxParser
      className={className}
      bindings={bindings}
      // @ts-ignore
      components={{ P: BonusFeed }}
      jsx={`<P>hey</P>`}
    />
  )
}
