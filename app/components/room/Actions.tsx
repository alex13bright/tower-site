import styled, { css } from 'styled-components'
import { ReactElement } from 'react'
import { I18n, useLocalized } from '~/core/utils'
import { Form } from '@remix-run/react'
import { ExternalLink } from '~/components/links'
import { actionsSVGs } from '~/styles/SVGs'

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
  font-size: 18px;
  line-height: 22px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`

const iconButton = css<{ kind: 'register' | 'contact' }>`
  ${button};
  background-color: ${({ kind }) => (kind === 'register' ? '#ee3c4b' : '#70ac30')};
  &::after {
    background-image: url(${({ kind }) => actionsSVGs[kind]});
    background-position: 100%;
    background-position-y: ${({ kind }) => (kind === 'register' ? '100%' : '50%')};
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

const RegisterButton = styled(ExternalLink).attrs({
  kind: 'register',
})`
  ${iconButton};
`
const ContactButton = styled.button.attrs({
  kind: 'contact',
})`
  ${iconButton};
`
const TagButton = styled.button`
  ${button};
  background: transparent;
  border: 2px solid hsla(0, 0%, 89.8%, 0.8);
`

const ReForm = styled(Form)`
  display: contents;
`

const Main = styled.div`
  grid-area: actions;
  display: grid;
  gap: 20px;
`

type Props = { className?: string }

export const Actions = ({ className }: Props): ReactElement => {
  const localized = useLocalized<Trans>(i18n)
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
