import React from 'react'
import { styled } from 'stitches.config'

type Props = {
  text: string
  color: string
}

const Colorful = styled('span', {})

export const ColorfulSpan = ({ text, color }: Props) => {
  return <Colorful css={{ backgroundColor: color }}>{text}</Colorful>
}
