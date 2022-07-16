import styled, { css } from 'styled-components'
import { ReactElement } from 'react'
import { Form } from '@remix-run/react'
import { widthAtLeast } from '~/styles/styles'
import { sidePaddingSize } from '~/components/room/header/headerStyles'
import { contentSidePaddingSize, contentSidePaddingSizePx } from '~/components/page/pageStyles'
import { ContactButton, SignUpButton, TagButton } from '~/components/common/actionButton'

const button = css`
  @media screen and ${widthAtLeast.lg} {
    padding: 10px;
    width: 260px;
  }
`

const StyledSignUpButton = styled(SignUpButton)`
  ${button};
`
const StyledContactButton = styled(ContactButton)`
  ${button};
`
const StyledTagButton = styled(TagButton)`
  ${button};
`

const StyledForm = styled(Form)`
  display: contents;
`

const Main = styled.div`
  grid-area: actions;
  display: grid;
  column-gap: ${contentSidePaddingSizePx};
  row-gap: ${contentSidePaddingSize / 2}px;

  @media screen and ${widthAtLeast.md} {
    column-gap: ${sidePaddingSize.md};
    row-gap: calc(${sidePaddingSize.md} / 2);
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
        <StyledSignUpButton href="/out.com" />
        <StyledContactButton />
        <StyledTagButton />
      </StyledForm>
    </Main>
  )
}
