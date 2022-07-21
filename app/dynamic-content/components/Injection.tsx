import { ReactElement } from 'react'
import { BonusFeed } from '~/dynamic-content/components/BonusFeed'
import { fakeUse } from '~/core/utils'

type Props = {
  children: ReactElement
}
export const Injection = ({ children }: Props) => {
  return null
  const [type, paramsStr] = children.props.children.split('#')
  const params = paramsStr ? paramsStr.split(',') : []
  fakeUse(params)
  switch (type) {
    case 'bonus': {
      return <BonusFeed />
    }
  }
}
Injection.displayName = 'Injection'
