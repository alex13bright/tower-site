import { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  accent,
  background,
  cancelSideMargins,
  contentTopPadding,
  expandOnParentSides,
  proximaNovaSb,
  pseudoAbsolute,
  secondary,
  secondaryDark,
  tertiary,
  widthAtLeast,
} from '~/styles/styles'
import { contentSidePaddingSizePx } from '~/components/page/pageStyles'
import { useToggle } from '~/custom-hooks/useToggle'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { stickyActionsHeight } from '~/components/page/StickyActions'
import { TocType } from '~/core/types'

const listPadding = 16
const titleHeight = 36
const mainPadding = 8

const StyledAnchor = styled.a`
  font-family: ${proximaNovaSb};
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
`

const StyledItem = styled.li`
  padding: 0 0 15px 15px;
  position: relative;
  &::before {
    ${pseudoAbsolute};
    z-index: 2;
    border-radius: 50%;
    left: 0;
    top: 3px;
    width: 9px;
    height: 9px;
  }
  &::after {
    ${pseudoAbsolute};
    z-index: 1;
    height: 100%;
  }
  &:last-child {
    padding-bottom: 0;
    &::after {
      display: none;
    }
  }
`

const NotScrolledItem = styled(StyledItem)`
  color: ${accent};
  &::before {
    background: #c4c4c4;
    border: 2px solid #fff;
  }
  &::after {
    background: ${tertiary};
    top: 5px;
    left: 4px;
    width: 1px;
  }
`

const ScrolledItem = styled(StyledItem)`
  color: ${secondaryDark};
  &::before {
    background: #fff;
    border: 2px solid #ccc;
  }
  &::after {
    background: #ccc;
    top: 5px;
    left: 3px;
    width: 3px;
  }
`

const offset = titleHeight + listPadding + mainPadding + stickyActionsHeight
const offsetXm = offset + contentTopPadding
const List = styled.ul<{ isVisible: boolean }>`
  padding: ${listPadding}px 0;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  max-height: calc(100vh - ${offset}px);
  overflow-y: auto;

  @media screen and ${widthAtLeast.xm} {
    display: block;
  }

  @media screen and ${widthAtLeast.xm} {
    max-height: calc(100vh - ${offsetXm}px);
  }
`

const TitleButton = styled.button<{ isPressed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${titleHeight}px;

  color: #243238;
  font-size: 16px;
  font-weight: 700;

  @media screen and ${widthAtLeast.xm} {
    pointer-events: none;
  }

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: url(/images/main/arrow-down-dark.svg) no-repeat 50%;
    ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};

    @media screen and ${widthAtLeast.xm} {
      display: none;
    }
  }
`

const Main = styled.nav`
  background: ${background};
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;

  display: grid;
  border-bottom: 1px solid ${secondary};

  ${expandOnParentSides(contentSidePaddingSizePx)};
  padding-top: ${mainPadding}px;
  padding-bottom: ${mainPadding}px;

  @media screen and ${widthAtLeast.md} {
    padding-top: 16px;
    padding-bottom: 16px;
    ${cancelSideMargins};
  }

  @media screen and ${widthAtLeast.xm} {
    border-bottom: none;
    grid-area: toc;
    top: ${contentTopPadding};
    height: min-content;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }
`

const useScrollIndexObserver = (toc: TocType) => {
  const [scrolledIndex, setScrolledIndex] = useState(-1)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setScrolledIndex((scrolledIndex) =>
          entries.reduce((scrolledIndex, entry) => {
            const { boundingClientRect, target } = entry
            const { id } = target
            const isScrolled = boundingClientRect.bottom <= 0
            const currentIndex = toc.findIndex(({ id: tocId }) => id === tocId)
            if (currentIndex === -1)
              throw new Error(`toc | correspondent heading is not found | id: ${id}`)

            if (!isScrolled && currentIndex <= scrolledIndex) {
              return currentIndex - 1
            } else if (isScrolled && currentIndex > scrolledIndex) {
              return currentIndex
            } else {
              return scrolledIndex
            }
          }, scrolledIndex)
        )
      },
      { threshold: 0 }
    )
    setObserver(observer)
  }, [toc])

  return { scrolledIndex, observer }
}

type ItemProps = {
  id: string
  title: string
  isScrolled: boolean
  observer: IntersectionObserver | null
}

const Item = ({ id, title, isScrolled, observer }: ItemProps) => {
  const ItemComponent = isScrolled ? ScrolledItem : NotScrolledItem
  const [element, setElement] = useState<HTMLElement | null>(null)
  useEffect(() => {
    const e = document.getElementById(id)
    if (!e) throw new Error(`toc | correspondent heading is not found | id: ${id}`)
    setElement(e)
  }, [id])

  useEffect(() => {
    if (observer === null || element === null) return
    observer.observe(element)
    return () => observer.unobserve(element)
  }, [element, observer])

  return (
    <ItemComponent>
      <StyledAnchor
        onClick={(e) => {
          e.preventDefault()
          if (element === null) throw new Error('did someone somehow click it on server? :)')
          element.scrollIntoView({ behavior: 'smooth' })
        }}
        href={'#' + id}
      >
        {title}
      </StyledAnchor>
    </ItemComponent>
  )
}

type Props = {
  className?: string
}

export const Toc = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { toc } = data.room.activePage
  const [isExpanded, toggleExpansion] = useToggle(false)

  const { scrolledIndex, observer } = useScrollIndexObserver(toc)

  return (
    <Main className={className}>
      <TitleButton onClick={toggleExpansion} isPressed={isExpanded}>
        Contents
      </TitleButton>
      <List isVisible={isExpanded}>
        {toc.map(({ id, title }, i) => (
          <Item
            key={id}
            id={id}
            title={title}
            isScrolled={i <= scrolledIndex}
            observer={observer}
          />
        ))}
      </List>
    </Main>
  )
}
