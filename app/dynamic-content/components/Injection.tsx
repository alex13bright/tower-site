import { ReactElement } from 'react'
import { BonusFeed } from '~/dynamic-content/components/BonusFeed'
import { Table } from '~/dynamic-content/components/Table'
import { FAQ, FaqListType } from '~/dynamic-content/components/FAQ'

export type TableData = {
  table: ReactElement[][]
  caption: string | null
}

export const parseTableChildren = (children: ReactElement[]): TableData => {
  const captions = children
    .filter(({ type }) => type === 'caption')
    .map((el) => el?.props?.children?.props?.children)
  const caption = captions.length === 1 ? captions[0] : null
  const [tbody] = children.filter(({ type }) => type === 'tbody')
  const table = tbody.props.children
    .filter(({ type }: { type: string }) => type === 'tr')
    .map((tr: ReactElement) => {
      const tds = tr.props.children.filter(({ type }: { type: string }) => type === 'td')
      return tds.map((td: ReactElement) => {
        return td?.props?.children
      })
    })
  return { caption, table }
}

type Props = {
  children: ReactElement[]
}

export const Injection = ({ children, ...props }: Props) => {
  const tableData = parseTableChildren(children)
  const { caption, table } = tableData
  if (caption === null || caption.at(0) !== '%' || caption.at(-1) !== '%') {
    return <Table {...props} data={tableData} />
  }
  const type = caption.slice(1, -1)
  switch (type) {
    case 'bonus-feed': {
      return <BonusFeed />
    }
    case 'faq': {
      const faqData: FaqListType = []
      return <FAQ data={faqData} />
    }
  }
}
Injection.displayName = 'Injection'
