import React from 'react'
import { Box, Card, ColorfulHeader, Grid, Meta } from 'components'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <Meta title="About me - Beshoi Emad" description="About me" />

      <Grid css={{ mt: '$4', gap: '$7' }}>
        <Box as="section" aria-labelledby="about">
          <ColorfulHeader header="About Me" emoji="💻" id="about" />
          <Card data="about" />
        </Box>

        <Box as="section" aria-labelledby="experience">
          <ColorfulHeader header="Experience" emoji="🤵" id="experience" />
          <Card data="experience" />
        </Box>
      </Grid>
    </>
  )
}
export default About
