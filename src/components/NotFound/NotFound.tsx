import React from 'react'
import Image from 'next/image'
import { styled } from 'stitches.config'
import { Box } from 'components'
import Link from 'next/link'

type Props = {}

const NotFoundSection = styled('section', {
  display: 'grid',
  gap: '$2',
})

const NotFoundWrapper = styled('div', {
  $$size: 'clamp(6.19rem, calc(4.07rem + 10.63vw), 11.64rem)',
  mb: '$5',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '$3',
})

const ImgContainer = styled('div', {
  height: '$$size',
  width: '$$size',
})

const NotFoundPargraph = styled('p', {
  fontSize: '$$size',
  p: '$0',
})

export const NotFound = (props: Props) => {
  return (
    <NotFoundSection>
      <h1>Not Found</h1>
      <Box>
        <NotFoundWrapper>
          <NotFoundPargraph>4</NotFoundPargraph>
          <ImgContainer>
            <Image
              src="/img/eye-of-horus.png"
              alt="not-found"
              width={'2rem'}
              height={'2rem'}
              layout="responsive"
              objectFit="contain"
            />
          </ImgContainer>
          <NotFoundPargraph>4</NotFoundPargraph>
        </NotFoundWrapper>
        <Link href="/">Go to home &#8599;</Link>
      </Box>
    </NotFoundSection>
  )
}
