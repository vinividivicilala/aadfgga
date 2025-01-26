import { keyframes, styled } from 'stitches.config'
import { Box } from 'components'
import { GradientAnimation } from '../ColorfulHeader/ColorfulHeader'

type Props = {}

const HiSection = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
  alignItems: 'center',

  '& h2': {
    backgroundImage: 'linear-gradient(-45deg,$crimson9,$blue9)',
    color: 'transparent',
    backgroundClip: 'text',
    '&:hover': {
      backgroundImage: 'linear-gradient(-45deg,$crimson9,$blue9,$green9,$blue9)',
      backgroundSize: '400%',
      animation: `${GradientAnimation} 2s linear infinite alternate`,
    },
  },
})

// const AvatarContainer = styled('div', {
//   position: 'relative',
//   width: '75px',
//   height: '75px',
//   objectFit: 'contain',
//   '@bp2': {
//     mi: '$0',
//     width: '100px',
//     height: '100px',
//   },
//   '@bp3': {
//     width: '125px',
//     height: '125px',
//   },
// });

// const Avatar = styled(Image, {
//   borderRadius: '$5',
// });

const Rotate = keyframes({
  '0%': { transform: 'rotate(-45deg)' },
  '100%': { transform: 'rotate(0)' },
})

const Wave = styled('div', {
  display: 'inline-block',
  animation: `${Rotate} 1s alternate`,
})

export const Hi = () => {
  return (
    <HiSection>
      {/* <AvatarContainer>
        <Avatar
          src="/imgs/Beshoi.jpg"
          alt="profile-picture"
          layout="fill"
          objectFit="contain"
          priority
        />
      </AvatarContainer> */}
      <Box>
        <h1 id="home">
          Hi, I&#39;m Beshoi <Wave>👋</Wave>
        </h1>
        <h2>Front End Developer</h2>
      </Box>
    </HiSection>
  )
}
