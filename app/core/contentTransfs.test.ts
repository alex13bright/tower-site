import { convertToJsx } from './contentTransfs'

test(`getLocaleFromRequest`, () => {
  const res = convertToJsx('<p>asd</p>')
  expect(res).toBe('<P>asd</P>')
})
