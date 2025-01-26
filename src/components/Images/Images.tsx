import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  quality?: number
}

export const CoverImage = (props: Props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width="900"
      height="400"
      layout="responsive"
      objectFit="cover"
      quality={props.quality}
      priority
    />
  )
}

export const RegularImage = (props: Props) => {
  return <Image src={props.src} alt={props.alt} width="900" height="200" />
}
