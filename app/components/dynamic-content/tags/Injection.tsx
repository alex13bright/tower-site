import { ReactElement } from 'react'
import { BonusFeed } from '~/components/dynamic-content/tags/BonusFeed'

type InjectionProps = {
  children: ReactElement
}
export const Injection = ({ children }: InjectionProps) => {
  const [type, paramsStr] = children.props.children.split('#')
  const params = paramsStr ? paramsStr.split(',') : []
  switch (type) {
    case 'bonus': {
      return <BonusFeed />
    }
  }
  return null
}
Injection.displayName = 'Injection'
