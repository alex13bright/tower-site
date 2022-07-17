export const isType = <Type>(v: any, predicate: (v: Type) => boolean): v is Type => predicate(v)
