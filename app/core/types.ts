import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>
export type AsType = keyof JSX.IntrinsicElements

export const narrowType = <T>(array: ReadonlyArray<T>, value: any) => {
  const index = array.indexOf(value)
  return index === -1 ? null : array[index]
}
