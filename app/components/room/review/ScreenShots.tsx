import { ReactElement } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import styled, { css } from 'styled-components'
import { widthAtLeast } from '~/styles/styles'

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

const Main = styled.div`
  display: none;
  @media screen and ${widthAtLeast.lg} {
    display: grid;
    align-items: start;
    grid-area: screenshots;
  }
`

const galleryOptions = { zoom: false } as any

type Props = {
  className?: string
}

export const ScreenShots = ({ className }: Props): ReactElement => {
  return (
    <Main className={className}>
      <Gallery withCaption options={galleryOptions}>
        <GalleryBox>
          <BigImageBox>
            <Item
              original="https://media.worldpokerdeals01.com/images/gallery-large/pppoker-cosmo-table-holdem-eng.jpg"
              thumbnail="https://media.worldpokerdeals01.com/images/gallery-large/pppoker-cosmo-table-holdem-eng.jpg"
              alt="Photo of seashore by Folkert Gorter"
              caption="Author: Folkert Gorter"
            >
              {({ ref, open }) => (
                <BigImage
                  src="https://media.worldpokerdeals01.com/images/gallery-large/pppoker-cosmo-table-holdem-eng.jpg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </BigImageBox>
          <SmallImagesBox>
            <Item
              original="https://media.worldpokerdeals01.com/images/gallery-large/pppoker-cosmo-table-holdem-eng.jpg"
              thumbnail="https://media.worldpokerdeals01.com/images/gallery-large/pppoker-cosmo-table-holdem-eng.jpg"
              alt="Photo of seashore by Folkert Gorter"
              caption="Author: Folkert Gorter"
            >
              {({ ref, open }) => (
                <SmallImage
                  src="https://media.worldpokerdeals01.com/images/gallery-large/pppoker-cosmo-table-holdem-eng.jpg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
              thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
              alt="Photo of seashore by Folkert Gorter"
              caption="Author: Folkert Gorter"
            >
              {({ ref, open }) => (
                <SmallImage
                  src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
              thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
              alt="Photo of seashore by Folkert Gorter"
              caption="Author: Folkert Gorter"
            >
              {({ ref, open }) => (
                <SmallImage
                  src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </SmallImagesBox>
        </GalleryBox>
      </Gallery>
    </Main>
  )
}
