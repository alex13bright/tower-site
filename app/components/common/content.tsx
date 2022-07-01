import styled, { css } from 'styled-components'
import { Link } from '@remix-run/react'
import { accent } from '~/styles/styles'
import { ReactElement, ReactText } from 'react'

const hCss = css`
  line-height: 1.2em;
`

export const H1 = styled.h1`
  ${hCss};
  font-size: 32px;
  margin-bottom: 16px;
`

export const H2 = styled.h2`
  ${hCss};
  font-size: 24px;
  margin: 40px 0 20px;

  position: relative;
  padding-top: 12px;
  &::before {
    background: url('/images/rest/h2-line.svg') no-repeat 50%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 42px;
    height: 2px;
  }
`

export const H3 = styled.h3`
  ${hCss};
  font-size: 20px;
  margin: 40px 0 20px;
`

export const P = styled.p`
  color: inherit;
  background: inherit;
  font-size: 17px;
  line-height: 1.4em;
  margin: 0 0 20px;
`

export const ContentLink = styled(Link)`
  color: ${accent};
  text-decoration: underline;
  background-color: transparent;
`

export const UL = styled.ul`
  list-style-position: outside;
  list-style-type: none;
  margin: 0 0 40px;
  padding: 0;
`

export const LI = styled.li`
  color: inherit;
  background: inherit;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 15px;
  padding-left: 25px;
  position: relative;

  &::before {
    background: url('/images/rest/list-item.svg') no-repeat 50%;
    content: '';
    position: absolute;
    top: 6px;
    left: 5px;
    display: block;
    width: 10px;
    height: 9px;
  }
`

const StyledFigure = styled.figure``
const FigureImage = styled.img``
const FigureCaption = styled.figcaption``

type FigureProps = {
  image: string
  caption: string
}

export const Figure = ({ image, caption }: FigureProps): ReactElement => {
  return (
    <StyledFigure>
      <FigureImage />
      <FigureCaption>{caption}</FigureCaption>
    </StyledFigure>
  )
}

type ImageProps = {
  children: ReactText
}

export const Img = ({ children: name }: ImageProps): ReactElement => {
  return <div>{name}</div>
}
// ![GGpoker-giunness-record.jpg](http://localhost:1337/uploads/G_Gpoker_giunness_record_ae7dc3d206.jpg)
// const [title, url] = children.slice(2, -1).split('](')