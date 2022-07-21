import { MutableRefObject, ReactElement } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import styled, { css } from 'styled-components'
import { widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { useLoaderData } from '@remix-run/react'

const image = css`
  cursor: pointer;
  object-fit: cover;
  width: 100%;
`

const BigImage = styled.img`
  ${image};
`

const SmallImage = styled.img`
  ${image};
`

const BigImageBox = styled.div``

const SmallImagesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 12px;
`

const GalleryBox = styled.div`
  display: grid;
  row-gap: 12px;
`

const Title = styled.div`
  display: grid;
  row-gap: 12px;
  color: #243238;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 22px;

  &::before {
    content: '';
    width: 30px;
    height: 2px;
    background: #ccc;
  }
`

const Main = styled.div`
  display: none;
  @media screen and ${widthAtLeast.lg} {
    display: grid;
    row-gap: 20px;
    grid-area: screenshots;
  }
`

const galleryOptions = { zoom: false } as any

type Props = {
  className?: string
}

export const Screenshots = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { screenshots } = data.room
  const [firstScreenshot, ...rest] = screenshots
  const { title, url, width, height } = firstScreenshot
  return (
    <Main className={className}>
      <Title> Screenshots</Title>
      <Gallery withCaption options={galleryOptions}>
        <GalleryBox>
          <BigImageBox>
            <Item
              width={width}
              height={height}
              original={url}
              thumbnail={url}
              alt={title}
              caption={title}
            >
              {({ ref, open }) => (
                <BigImage
                  src={url}
                  alt={title}
                  ref={ref as MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </BigImageBox>
          {rest.length === 0 ? null : (
            <SmallImagesBox>
              {rest.map(({ title, url, width, height }) => (
                <Item
                  key={url}
                  width={width}
                  height={height}
                  original={url}
                  thumbnail={url}
                  alt={title}
                  caption={title}
                >
                  {({ ref, open }) => (
                    <SmallImage
                      src={url}
                      alt={title}
                      ref={ref as MutableRefObject<HTMLImageElement>}
                      onClick={open}
                    />
                  )}
                </Item>
              ))}
            </SmallImagesBox>
          )}
        </GalleryBox>
      </Gallery>
    </Main>
  )
}
