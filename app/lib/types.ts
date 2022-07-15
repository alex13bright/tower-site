import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>
export type AsType = keyof JSX.IntrinsicElements

export type Subunion<T, U extends T> = U
export type Unpacked<T> = T extends (infer U)[] ? U : T
export const narrowType = <T>(array: ReadonlyArray<T>, value: any): T | null => {
  const index = array.indexOf(value)
  return index === -1 ? null : array[index]
}
