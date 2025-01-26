import type { NextPage } from 'next'
import Link from 'next/link'
import getPosts from 'scripts/fileSystem'
import generateRSSFeed from 'scripts/rss'
import { SortedPosts } from './blog'
import { Meta, Hi, ColorfulHeader, PostItem } from 'components'
import { styled } from 'stitches.config'
import { CardsGrid } from 'components/Card/Card.styled'

const HomeSection = styled('section', {
  display: 'grid',
  gridGap: '$4',
})

const Box = styled('div', {
  mt: '$4',
})

const SeeMore = styled('p', {
  ml: '$2',
  fontWeight: '$3',
  '&:hover': {
    textDecoration: 'underline',
  },
})

const Home: NextPage<SortedPosts> = ({ SortedPosts }) => {
  const LatestPosts = SortedPosts.filter((post) => post.data.tag !== 'tools').slice(0, 3)

  const LatestTools = SortedPosts.filter((post) => post.data.tag === 'tools').slice(0, 3)

  return (
    <HomeSection aria-labelledby="home">
      <Meta title="Beshoi Emad - Front End Developer" description="Front End Developer" />

      <Hi />

      <Box aria-labelledby="posts" as="section" className="flow">
        <ColorfulHeader header="Latest Posts" emoji="📚" id="posts" />
        <CardsGrid>
          {LatestPosts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </CardsGrid>

        <SeeMore>
          <Link href="/blog">See More Posts &#8599;</Link>
        </SeeMore>
      </Box>

      <Box aria-labelledby="tools" as="section" className="flow">
        <ColorfulHeader header="Latest Tools" emoji="⛏" id="tools" />
        <CardsGrid>
          {LatestTools.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </CardsGrid>

        <SeeMore>
          <Link href="/tools">See my tools &#8599;</Link>
        </SeeMore>
      </Box>
    </HomeSection>
  )
}

export default Home

export const getStaticProps = () => {
  const posts = getPosts()

  const SortedPosts = posts.sort((a, b) =>
    new Date(a?.data.date) < new Date(b?.data.date) ? 1 : -1
  )

  generateRSSFeed(SortedPosts)
  return {
    props: {
      SortedPosts,
    },
  }
}
