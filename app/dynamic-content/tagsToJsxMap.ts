import { P, H1, H3 } from '~/dynamic-content/components/content'
import { Table } from '~/dynamic-content/components/Table'
import { Anchor } from '~/dynamic-content/components/Anchor'
import { Image } from '~/dynamic-content/components/Image'
import { Injection } from '~/dynamic-content/components/Injection'
import { UnorderedList } from '~/dynamic-content/components/UnorderedList'
import { Heading2 } from '~/dynamic-content/components/Heading2'

export const tagsToJsxMap = {
  p: P,
  h1: H1,
  h2: Heading2,
  h3: H3,
  ul: UnorderedList,
  a: Anchor,
  table: Table,
  img: Image,
  h6: Injection,
}
