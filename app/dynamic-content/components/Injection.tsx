import { ReactElement } from 'react'
import { BonusFeed } from '~/dynamic-content/components/BonusFeed'
import { fakeUse } from '~/core/utils'
import { Table } from '~/dynamic-content/components/Table'

type Props = {
  children: ReactElement
}
export const Injection = ({ children, ...props }: Props) => {
  console.log(children)
  return null
  const [rawType, paramsStr] = children.props.children.split('#')
  const type = rawType.slice(1, -1)
  const params = paramsStr ? paramsStr.split(',') : []
  fakeUse(params)
  switch (type) {
    case 'table': {
      return <Table {...props}>{children}</Table>
    }
    case 'bonus-feed': {
      return <BonusFeed />
    }
  }
}
Injection.displayName = 'Injection'
