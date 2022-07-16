import { ReactElement } from 'react'
import JsxParser from 'react-jsx-parser'
import styled from 'styled-components'
import { tagsToJsxMap } from '~/dynamic-content/tagsToJsxMap'

const StyledJsxParser = styled(JsxParser)`
  display: grid;
`

type Props = {
  content: string
  className?: string
}

const components = Object.fromEntries(
  Object.values(tagsToJsxMap).map((com) => [com.displayName, com])
)

export const DynamicContent = ({ content, className }: Props): ReactElement => {
  const bindings = {
    // data: 'real_data',
    // myEventHandler: () => {},
  }
  return (
    <StyledJsxParser
      onError={(error) => {
        throw error
      }}
      autoCloseVoidElements={true}
      className={className}
      bindings={bindings}
      components={components}
      jsx={content}
    />
  )
}
