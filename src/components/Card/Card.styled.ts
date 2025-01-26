import Image from 'next/image'
import { styled } from 'stitches.config'

export const CardsGrid = styled('div', {
  display: 'grid',
  gridGap: '$5',
  mt: '$4',

  '&>:nth-child(3n - 2)': {
    backgroundColor: '$blue2',
    outline: '2px solid $blue5',
    '& h3': {
      color: '$blue11',
    },
  },
  '&>:nth-child(3n - 1)': {
    backgroundColor: '$crimson2',
    outline: '2px solid $crimson5',
    '& h3': {
      color: '$crimson11',
    },
  },
  '&>:nth-child(3n)': {
    backgroundColor: '$cyan2',
    outline: '2px solid $cyan5',
    '& h3': {
      color: '$cyan11',
    },
  },
})

export const CardSection = styled('div', {
  borderRadius: '$3',
  py: '$3',
  px: '$5',
})

export const Card = styled('article', {
  borderRadius: '$3',
  // display: 'grid',
  // width:'100%',
  // maxWidth: '500px',
  // mi: '$auto',
  // '@bp2': {
  //   maxWidth: '100%',
  //   mi: '$0',
  //   gridTemplateColumns: '3fr 1fr',
  //   gridTemplateRows: '200px',
  //   py: '$2',
  //   px: '$3',
  // },
})

export const CardText = styled('div', {
  // maxWidth: '55ch',
  py: '$3',
  px: '$3',
})

export const CardHeader = styled('h3', {
  mt: '$1',
})

export const CardSmall = styled('span', {
  margin: '$0 !important',
  color: '$slate11',
  fontSize: '$1',
  fontWeight: '$3',
})

export const CardParagraph = styled('p', { mt: '$2' })

export const CardImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '200px',
})

export const CardImage = styled(Image, {
  width: '100%',
  cursor: 'pointer',
  borderBottomRightRadius: '$2',
  borderBottomLeftRadius: '$2',
  '@bp1': {
    borderRadius: '$2',
  },
})
