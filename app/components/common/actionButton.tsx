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
import { ExternalLink, LinkProps } from '~/components/ui/ExternalLink'
import { darken } from '~/core/utils'

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

export const SignUpButton = (props: LinkProps) => {
  return <SignUpButtonStyle {...props}>Sign up</SignUpButtonStyle>
}

export const ContactButton = styled.button`
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

export const TagButton = styled.button`
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
