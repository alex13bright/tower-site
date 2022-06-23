export const utf8InlineDataHeader = `data:image/svg+xml;utf8,`
export const base64InlineDataHeader = `data:image/svg+xml;base64,`

export const base64InlineSvg = (utfSvg: string) => base64InlineDataHeader + btoa(utfSvg)

export const copyToClip = (value: string) => navigator.clipboard.writeText(value)
