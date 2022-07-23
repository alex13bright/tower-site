import { ReactElement } from 'react'
import styled from 'styled-components'
import { basicPseudoIcon } from '~/styles/styles'

const Value = styled.span`
  display: none;
`

const Main = styled.span`
  display: grid;
  place-items: center;

  &::before {
    ${basicPseudoIcon};
  }
`

type Props = {
  folder: string
  name: string
  width: string
  height: string
  className?: string
}

export const GraphicValue = ({ className, folder, name, width, height }: Props): ReactElement => {
  return (
    <Main
      className={className}
      $width={width}
      $height={height}
      url={`/icons/${folder}/${name}.svg`}
    >
      <Value>{name}</Value>
    </Main>
  )
}
