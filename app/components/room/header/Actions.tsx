import styled from 'styled-components'
import { ReactElement } from 'react'
import { Form } from '@remix-run/react'
import { widthAtLeast } from '~/styles/styles'
import { sidePaddingSize } from '~/components/room/header/headerStyles'
import { contentSidePaddingSize } from '~/components/page/pageStyles'
import { ContactButton, SignUpButton, TagButton } from '~/components/common/actionButton'

const StyledForm = styled(Form)`
  display: contents;
`

const Main = styled.div`
  grid-area: actions;
  display: grid;
  column-gap: ${contentSidePaddingSize.xs};
  row-gap: calc(${contentSidePaddingSize.xs} / 2);

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
        <SignUpButton href="/out.com" />
        <ContactButton>Contact us</ContactButton>
        <TagButton>Tag your account</TagButton>
      </StyledForm>
    </Main>
  )
}
