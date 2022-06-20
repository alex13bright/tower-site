import styled, { css } from 'styled-components'
import { ReactElement } from 'react'
import { Form } from '@remix-run/react'
import { ExternalLink } from '~/components/ui/ExternalLink'
import {
  background,
  primary,
  primaryAction,
  proximaNovaSb,
  secondaryAction,
  widthAtLeast,
} from '~/styles/styles'
import chroma from 'chroma-js'
import { headerBlock } from '~/components/room/header/headerStyles'

const button = css`
  color: inherit;
  padding: 14px;
  text-align: center;
  font-family: ${proximaNovaSb};
  font-size: 18px;
  line-height: 22px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  @media screen and ${widthAtLeast.lg} {
    padding: 10px;
    width: 260px;
  }
`

const iconButton = css`
  ${button};
  &::after {
    background-position: 100%;
    background-repeat: no-repeat;
    content: '';
    height: 68px;
    margin-top: -34px;
    opacity: 0.1;
    position: absolute;
    right: 24px;
    top: 50%;
    width: 72px;
  }
`

const RegisterButton = styled(ExternalLink)`
  ${iconButton};
  background-color: ${primaryAction};

  &:hover {
    background-color: ${chroma(primaryAction).darken(0.1).hex()};
  }

  &::after {
    background-image: url(/images/rest/arrow.svg);
  }
`

const ContactButton = styled.button`
  ${iconButton};
  background-color: ${secondaryAction};

  &:hover {
    background-color: ${chroma(secondaryAction).darken(0.1).hex()};
  }

  &::after {
    background-image: url(/images/rest/question.svg);
    background-position-y: 50%;
  }
`

const TagButton = styled.button`
  ${button};
  background: transparent;
  border: 2px solid hsla(0, 0%, 89.8%, 0.8);
  &:hover {
    color: ${primary};
    background-color: ${background};
    border-color: ${background};
  }
`

const ReForm = styled(Form)`
  display: contents;
`

const Main = styled.div`
  display: grid;
  gap: 20px;

  ${headerBlock};
  grid-area: actions;

  @media screen and ${widthAtLeast.md} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 30px;
  }
  @media screen and ${widthAtLeast.lg} {
    margin-top: 30px;

    grid-template-columns: repeat(3, 1fr);
    justify-self: start;
  }
`

type Props = { className?: string }

export const Actions = ({ className }: Props): ReactElement => {
  return (
    <Main className={className}>
      <ReForm>
        <RegisterButton href="/out.com">Sign up</RegisterButton>
        <ContactButton>Contact us</ContactButton>
        <TagButton>Tag your account</TagButton>
      </ReForm>
    </Main>
  )
}
