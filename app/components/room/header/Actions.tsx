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
import { darken } from '~/core/utils'
import { sidePaddingSize } from '~/components/room/header/headerStyles'
import { contentSidePaddingSize } from '~/components/page/pageStyles'

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
    background-color: ${darken(primaryAction, 0.1)};
  }

  &::after {
    background-image: url(/images/rest/arrow.svg);
  }
`

const ContactButton = styled.button`
  ${iconButton};
  background-color: ${secondaryAction};

  &:hover {
    background-color: ${darken(secondaryAction, 0.1)};
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
  padding: 12px;
  &:hover {
    color: ${primary};
    background-color: ${background};
    border-color: ${background};
  }
`

const StyledForm = styled(Form)`
  display: contents;
`

const Main = styled.div`
  grid-area: actions;
  display: grid;
  gap: ${contentSidePaddingSize.xs};

  @media screen and ${widthAtLeast.md} {
    gap: ${sidePaddingSize.md};
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 30px;
  }
  @media screen and ${widthAtLeast.lg} {
    gap: ${sidePaddingSize.lg};
    margin-top: 30px;

    grid-template-columns: repeat(3, 1fr);
    justify-self: start;
  }
`

type Props = { className?: string }

export const Actions = ({ className }: Props): ReactElement => {
  return (
    <Main className={className}>
      <StyledForm>
        <RegisterButton href="/out.com">Sign up</RegisterButton>
        <ContactButton>Contact us</ContactButton>
        <TagButton>Tag your account</TagButton>
      </StyledForm>
    </Main>
  )
}
