import styled, { css } from 'styled-components'
import {
  background,
  primary,
  primaryAction,
  primaryDark,
  proximaNovaSb,
  secondaryAction,
  widthAtLeast,
} from '~/styles/styles'
import { ExternalLink } from '~/components/ui/ExternalLink'
import { darken } from '~/core/utils'
import { AnchorProps, ButtonProps } from '~/core/types'

const button = css`
  color: ${primaryDark};
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

const SignUpButtonStyle = styled(ExternalLink)`
  ${iconButton};
  background-color: ${primaryAction};

  &:hover {
    background-color: ${darken(primaryAction, 0.1)};
  }

  &::after {
    background-image: url(/images/rest/arrow.svg);
  }
`

export const SignUpButton = (props: Omit<AnchorProps, 'children'>) => {
  return <SignUpButtonStyle {...props}>Sign up</SignUpButtonStyle>
}

const StyledContactButton = styled.button`
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

export const ContactButton = (props: Omit<ButtonProps, 'children'>) => {
  return <StyledContactButton {...props}>Start chat</StyledContactButton>
}

export const StyledTagButton = styled.button`
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

export const TagButton = (props: Omit<ButtonProps, 'children'>) => {
  return <StyledTagButton {...props}>Tag your account</StyledTagButton>
}
