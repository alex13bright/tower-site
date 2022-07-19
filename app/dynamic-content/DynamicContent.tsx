import { ReactElement } from 'react'
import JsxParser from 'react-jsx-parser'
import styled from 'styled-components'
import { tagsToJsxMap } from '~/dynamic-content/tagsToJsxMap'

const StyledJsxParser = styled(JsxParser)`
  display: grid;
`

type Props = {
  content: string
  rawContent: string
  className?: string
}

const components = Object.fromEntries(
  Object.values(tagsToJsxMap).map((com) => [com.displayName, com])
)

export const DynamicContent = ({ content, rawContent, className }: Props): ReactElement => {
  const bindings = {
    // data: 'real_data',
    // myEventHandler: () => {},
  }
  return (
    <StyledJsxParser
      onError={(error) => {
        console.log('StyledJsxParser', error)
        throw error
      }}
      autoCloseVoidElements={true}
      className={className}
      bindings={bindings}
      components={components}
      jsx={content}
      renderError={({ error }: { error: string }) => (
        <div
          dangerouslySetInnerHTML={{
            __html: `<div id="cms" style="display: grid">${rawContent}</div>`,
          }}
        />
      )}
    />
  )
}
