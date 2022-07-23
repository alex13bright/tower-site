import { ReactElement } from 'react'

type ImageProps = {
  src: string
  alt: string
  style?: Record<string, string>
  width: string
  height: string
}

export const Image = ({ src, alt, style }: ImageProps): ReactElement | null => {
  //, width, height
  return <img src={src} alt={alt} style={style} />
}
Image.displayName = 'Image'
