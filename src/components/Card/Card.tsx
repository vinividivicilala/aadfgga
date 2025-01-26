import React from 'react'
import { Flex } from 'components'
import * as s from './Card.styled'
import { about, experience } from './CardData'

type Props = {
  data: string
}

export const Card = ({ data }: Props) => {
  return (
    <>
      {data === 'about' && (
        <s.CardsGrid>
          {about.map((item, index) => (
            <s.CardSection key={index}>
              <s.CardParagraph>{item.about}</s.CardParagraph>
            </s.CardSection>
          ))}
        </s.CardsGrid>
      )}

      {data === 'experience' && (
        <s.CardsGrid>
          {experience.map((item) => (
            <s.CardSection key={item.date}>
              <Flex css={{ gap: '$1', flexWrap: 'wrap' }}>
                <s.CardSmall>{item.date}</s.CardSmall>
                <s.CardSmall>/ {item.company}</s.CardSmall>
              </Flex>
              <s.CardHeader>{item.header}</s.CardHeader>
              <s.CardParagraph>{item.info}</s.CardParagraph>
            </s.CardSection>
          ))}
        </s.CardsGrid>
      )}
    </>
  )
}
