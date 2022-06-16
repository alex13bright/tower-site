import styled, { css } from 'styled-components'
import { ReactElement } from 'react'
import { I18n, useLocalized } from '~/core/utils'
import { Form } from '@remix-run/react'
import { ExternalLink } from '~/components/links'
import { background, primary, primaryAction, proximaNovaSb, secondaryAction } from '~/styles/styles'
import chroma from 'chroma-js'

type Trans = {
  register: string
  contact: string
  tagAccount: string
}
const i18n: I18n<Trans> = {
  en: {
    register: 'Sign up',
    contact: 'Contact us',
    tagAccount: 'Tag your account',
  },
  ru: {
    register: 'Перейти',
    contact: 'Чат с менеджером',
    tagAccount: 'Привязать счет',
  },
  es: {
    register: 'Registro',
    contact: 'Contáctanos',
    tagAccount: 'Registra tu cuenta',
  },
}

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
    background-image: url(/images/arrow.svg);
  }
`
const ContactButton = styled.button`
  ${iconButton};
  background-color: ${secondaryAction};
  &:hover {
    background-color: ${chroma(secondaryAction).darken(0.1).hex()};
  }
  &::after {
    background-image: url(/images/question.svg);
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
`

type Props = { className?: string }

export const Actions = ({ className }: Props): ReactElement => {
  const localized = useLocalized(i18n)
  return (
    <Main className={className}>
      <ReForm>
        <RegisterButton href="/out.com">{localized.register}</RegisterButton>
        <ContactButton>{localized.contact}</ContactButton>
        <TagButton>{localized.tagAccount}</TagButton>
      </ReForm>
    </Main>
  )
}
