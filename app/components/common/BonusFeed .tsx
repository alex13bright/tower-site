import { ReactElement } from 'react'
import styled from 'styled-components'
import { accent, proximaNovaSb, secondaryDark } from '~/styles/styles'
import { copyToClip } from '~/core/browserUtilities'
import { Tooltip } from '~/components/ui/Tooltip'

const BonusCodeTitle = styled.div`
  color: ${secondaryDark};
  text-transform: uppercase;
  font-family: ${proximaNovaSb};
  font-size: 10px;
`
const BonusCodeValue = styled.div`
  font-weight: bold;
`
const BonusCode = styled.div`
  cursor: pointer;
  position: relative;
  background: #fafafa;
  border: 1px dashed hsla(0, 0%, 46.7%, 0.5);
  padding: 4px 0;

  &:hover {
    border: 1px dashed ${accent};
  }

  &:hover:before {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 12px;
    top: -12px;
    left: 50%;
    background: url('/images/rest/scissors.svg') no-repeat;
  }
`
const Main = styled.div``

type Props = {
  className?: string
}

export const BonusFeed = ({ className }: Props): ReactElement => {
  const bonusCode = 'WPDEALS'
  return (
    <Main className={className}>
      <Tooltip message="Copied to the clipboard">
        <BonusCode onClick={() => copyToClip(bonusCode)}>
          <BonusCodeTitle>Bonus-code</BonusCodeTitle>
          <BonusCodeValue>{bonusCode}</BonusCodeValue>
        </BonusCode>
      </Tooltip>
    </Main>
  )
}
