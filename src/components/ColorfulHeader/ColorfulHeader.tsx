import React, { useEffect, useState } from 'react'
import { Flex } from 'components'
import { styled, keyframes } from 'stitches.config'

type Props = {
  header: string
  emoji: string
  css?: object
  id?: string
}

export const GradientAnimation = keyframes({
  '0%': { backgroundPosition: 'left' },
  '100%': { backgroundPosition: 'right' },
})

const Header = styled('h2', {
  color: 'transparent',
  backgroundClip: 'text',
  '&:hover': {
    backgroundSize: '400%',
    animation: `${GradientAnimation} 1s linear infinite alternate`,
  },
})

const Emoji = styled('span', { fontSize: '$3' })

const Colorful = () => {
  const ColorsList = [
    '$indigo',
    '$grass',
    '$blue',
    '$red',
    '$orange',
    '$violet',
    '$yellow',
    '$pink',
    '$cyan',
    '$green',
    '$plum',
    '$teal',
    '$sky',
    '$lime',
    '$crimson',
    '$brown',
    '$purple',
    '$tomato',
    '$amber',
    '$slate',
  ]

  const AnglesList = [45, 90, 135, 225, 270, 315, 360]
  const RandomAngle = Math.floor(Math.random() * (AnglesList.length - 1))
  const Angle = AnglesList[RandomAngle] + 'deg'

  const RandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  const RandomValue = () => Math.floor(Math.random() * (ColorsList.length - 1))
  const Colors = ColorsList.map((color) => color + RandomNumber(9, 11))
  const RandomColor = Colors[RandomValue()]

  return { RandomColor, Angle }
}

export const ColorfulHeader = ({ header, emoji, id, css }: Props) => {
  const [firstcolor, setFirstcolor] = useState('$blue5')
  const [secondColor, setSecondcolor] = useState('$crimson8')
  const [angle, setAngle] = useState('45deg')
  useEffect(() => {
    setFirstcolor(Colorful().RandomColor)
    setSecondcolor(Colorful().RandomColor)
    setAngle(Colorful().Angle)
  }, [])

  return (
    <Flex css={{ alignItems: 'center', gap: '$1' }}>
      <Header
        id={id}
        css={{
          backgroundImage: `linear-gradient(${angle},${firstcolor}, ${secondColor} )`,
        }}
      >
        {header}
      </Header>
      <Emoji css={{ ...css }}>{emoji}</Emoji>
    </Flex>
  )
}
