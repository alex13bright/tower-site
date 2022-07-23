import { ReactElement } from 'react'
import { Row, Value } from '~/components/room/header/headerStyles'
import styled from 'styled-components'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import {
  Available,
  Caption,
  Main,
  StyledContent,
  StyledNameWithIcon,
} from '~/components/common/styles'
import { fakeUse } from '~/core/utils'

const StyledMain = styled(Main)`
  grid-area: support;
`

type Props = {
  className?: string
}

export const Support = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  fakeUse(data)
  const support = {
    email: 'help@ggpoker.com',
    phone: null,
    liveChat: true,
  }
  const { email, phone, liveChat } = support
  return (
    <StyledMain className={className}>
      <Caption $width="40px" $height="40px" url="/decorations/support.svg">
        Support
      </Caption>
      <StyledContent>
        <Row>
          <StyledNameWithIcon kind="email">Email</StyledNameWithIcon>
          <Value>{email}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="phone">Phone</StyledNameWithIcon>
          <Value>{phone === null ? <Available isAvailable={false} /> : phone}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="live-chat">Live chat</StyledNameWithIcon>
          <Value>
            <Available isAvailable={liveChat} />
          </Value>
        </Row>
      </StyledContent>
    </StyledMain>
  )
}
