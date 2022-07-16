import { P, H1, H2, H3 } from '~/components/dynamic-content/content'
import { Table } from '~/components/dynamic-content/Table'
import { Anchor } from '~/components/dynamic-content/Anchor'
import { Image } from '~/components/dynamic-content/Image'
import { Injection } from '~/components/dynamic-content/Injection'
import { UnorderedList } from '~/components/dynamic-content/UnorderedList'

export const tagsToJsxMap = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  ul: UnorderedList,
  a: Anchor,
  table: Table,
  img: Image,
  h6: Injection,
}
