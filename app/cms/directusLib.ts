export type EmptyField = undefined | null
export type Field = string | number | EmptyField
export type Ref<Item> = Item | Field
export type Refs<Item> = Item[] | Field

export const isItem = <Item>(ref: Ref<Item>): ref is Item => typeof ref === 'object' && ref !== null

// export const unwrapTranslation = <Item>(item: Item) => {
//   if (isItem(item)) return null
//   if (
//     typeof item !== 'object' ||
//     !Array.isArray(item?.translations) ||
//     item.translations.length !== 1 ||
//     typeof item.translations[0] !== 'object'
//   )
//     return null
//   const translation = item.translations[0] as Object
//
//   return { ...omit(item, 'translations'), ...translation }
// }

export const squeeze = <T>(value: T[] | undefined | null | string | number): T => {
  if (!Array.isArray(value) || value.length !== 1)
    throw new Error('value must be single value array')
  return value[0]
}

export const squeezeToItem = <Item>(value: Refs<Item>): Item => {
  const squeezed = squeeze(value)
  if (squeezed === null || typeof squeezed !== 'object') throw new Error('error')
  return squeezed
}
