import styled, { css } from 'styled-components'
import { ReactElement } from 'react'
import { I18n, useLocalized } from '~/core/utils'
import { Form } from '@remix-run/react'

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

const SVGs = {
  register:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMzLjY3MyA0Ny45NTdjLjQ1Ni40NSAxLjA1NS42NzIgMS42NTUuNjcyLjYgMCAxLjE5OC0uMjIyIDEuNjU3LS42NzVMNDkuNDQgMzUuNzUzYTIuMjU5IDIuMjU5IDAgMCAwIC4wMjctMy4yN0wzNi45ODUgMjAuMjU1YTIuMzc3IDIuMzc3IDAgMCAwLTMuMzEyIDAgMi4yNiAyLjI2IDAgMCAwIDAgMy4yNDNsOC40OSA4LjMxNkgyLjU2Yy0xLjI5MiAwLTIuMzQgMS4wMjctMi4zNCAyLjI5MyAwIDEuMjY1IDEuMDQ4IDIuMjkyIDIuMzQgMi4yOTJoMzkuNmwtOC40ODggOC4zMTRhMi4yNiAyLjI2IDAgMCAwIDAgMy4yNDR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTM3LjY3IDY3LjczNWMtMTQuMjAyIDAtMjYuNzQyLTguMzctMzEuOTUtMjEuMzI2LS40NzUtMS4xNzQuMTE4LTIuNTA2IDEuMzItMi45NzEgMS4xOTgtLjQ1OCAyLjU2Mi4xMTMgMy4wMzYgMS4yOTZDMTQuNTc0IDU1LjkyIDI1LjQwNiA2My4xNSAzNy42NzEgNjMuMTVjMTYuMzQ3IDAgMjkuNjQ4LTEzLjAzIDI5LjY0OC0yOS4wNDJTNTQuMDE4IDUuMDY3IDM3LjY3MSA1LjA2N2MtMTIuMjY1IDAtMjMuMDk3IDcuMjMtMjcuNTk1IDE4LjQxNS0uNDc3IDEuMTgzLTEuODM4IDEuNzU1LTMuMDM2IDEuMjk2LTEuMjAyLS40NjQtMS43OTUtMS43OTctMS4zMi0yLjk3QzEwLjkyOCA4Ljg1IDIzLjQ2OC40OCAzNy42Ny40OCA1Ni42LjQ4MSA3MiAxNS41NjggNzIgMzQuMTA4UzU2LjU5OSA2Ny43MzUgMzcuNjcgNjcuNzM1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
  contact:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1IDU3LjUyNGMwLTEyLjM5LTguMzQ4LTIzLjIxNC0yMC4xMi0yNi40NzZDNjQuMTQgMTMuODAzIDQ5Ljg4IDAgMzIuNDU2IDAgMTQuNTYgMCAwIDE0LjU2IDAgMzIuNDU2YTMyLjM1NSAzMi4zNTUgMCAwIDAgNC41IDE2LjQ5N0wuMTIgNjQuNzkzbDE1LjgzOS00LjM4MmEzMi4zMzUgMzIuMzM1IDAgMCAwIDE1LjA4OCA0LjQ2N0MzNC4zMSA3Ni42NTEgNDUuMTM1IDg1IDU3LjUyNSA4NWM0Ljk0NiAwIDkuNzU1LTEuMzE3IDEzLjk4LTMuODJsMTMuMzc2IDMuNy0zLjctMTMuMzc1QTI3LjM3NiAyNy4zNzYgMCAwIDAgODUgNTcuNTI1em0tNjguMjU1LTIuNDk4TDcuMjYzIDU3LjY1bDIuNjIzLTkuNDgzLS41OTgtLjkzNUEyNy4zODMgMjcuMzgzIDAgMCAxIDQuOTggMzIuNDU2YzAtMTUuMTUgMTIuMzI2LTI3LjQ3NiAyNy40NzYtMjcuNDc2IDE1LjE1IDAgMjcuNDc2IDEyLjMyNiAyNy40NzYgMjcuNDc2IDAgMTUuMTUtMTIuMzI2IDI3LjQ3Ni0yNy40NzYgMjcuNDc2YTI3LjM4NSAyNy4zODUgMCAwIDEtMTQuNzc2LTQuMzA4bC0uOTM1LS41OTh6bTYwLjk5MiAyMi43MTEtNy4wMzYtMS45NDYtLjk0LjYxMWEyMi40MDggMjIuNDA4IDAgMCAxLTEyLjIzNyAzLjYxN2MtOS43MzcgMC0xOC4yOTQtNi4yOTYtMjEuMzI2LTE1LjMyNCAxNC45MTEtMS43MiAyNi43NzgtMTMuNTg1IDI4LjQ5Ny0yOC40OTggOS4wMjggMy4wMzMgMTUuMzI1IDExLjU5IDE1LjMyNSAyMS4zMjcgMCA0LjM2My0xLjI1MSA4LjU5NS0zLjYxOCAxMi4yMzhsLS42MTEuOTQgMS45NDcgNy4wMzV6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTI5Ljk2NyA0Ny4wNDloNC45OHY0Ljk4aC00Ljk4di00Ljk4em03LjQ2OC0yMC4wODlhNC45MyA0LjkzIDAgMCAxLTEuNjIgMy42NzdsLTUuODUgNS4zNTR2Ni4wNzdoNC45OHYtMy44ODNsNC4yMzItMy44NzNhOS45OSA5Ljk5IDAgMCAwIDMuMjM5LTcuMzUxYzAtNS40OTMtNC40NjgtOS45NjEtOS45Ni05Ljk2MS01LjQ5NCAwLTkuOTYyIDQuNDY4LTkuOTYyIDkuOTZoNC45OGE0Ljk4NiA0Ljk4NiAwIDAgMSA0Ljk4MS00Ljk4IDQuOTg2IDQuOTg2IDAgMCAxIDQuOTggNC45OHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=',
}

const button = css`
  color: inherit;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
`

const Button = styled.button`
  ${button};
`

const IconButton = styled.button<{ kind: 'register' | 'contact' }>`
  ${button};
  &::after {
    background-image: url(${({ kind }) => SVGs[kind]});
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
        <IconButton kind="register" as="a">
          {localized.register}
        </IconButton>
        <IconButton kind="contact">{localized.contact}</IconButton>
        <Button>{localized.tagAccount}</Button>
      </ReForm>
    </Main>
  )
}
