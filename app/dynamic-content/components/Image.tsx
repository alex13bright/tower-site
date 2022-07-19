import { ReactElement } from 'react'

type ImageProps = {
  src: string
  alt: string
  style: Record<string, string>
  width: string
  height: string
}

export const Image = ({ src, alt, style, width, height }: ImageProps): ReactElement | null => {
  return null
  // return <img src={src} alt={alt} style={style} width={width} height={height} />
}
Image.displayName = 'Image'
