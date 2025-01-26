import React, { useState } from 'react'
import getPosts from 'scripts/fileSystem'
import { PostItem, Meta, ColorfulHeader } from 'components'
import { CardsGrid } from 'components/Card/Card.styled'
import { styled } from 'stitches.config'

export type SortedPosts = {
  SortedPosts: [
    post: {
      date: Date
      slug: string
      data: {
        date: string
        tag: string
        title: string
        excerpt: string
        img: string
      }
    }
  ]
}

const SearchInput = styled('input', {
  display: 'inline-block',
  padding: '$2',
  width: '100%',
  margin: '$2 0',
  backgroundColor: '$background',
  border: '2px solid $slate9',
  borderRadius: '$2',
  outline: 'none',
})

const Blog = ({ SortedPosts }: SortedPosts) => {
  const [searchkeyowrd, setSearchKeyowrd] = useState('')
  const keyword = searchkeyowrd.toLocaleLowerCase()
  // const BlogPosts = SortedPosts.filter((post) => post.data.tag !== 'tools');
  return (
    <section aria-labelledby="blog">
      <Meta title="Blog - Beshoi Emad" description="My blog" />
      <ColorfulHeader header="All Posts" emoji="📚" id="blog" />

      <SearchInput
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchKeyowrd(e.currentTarget.value)}
        value={searchkeyowrd}
      />

      <CardsGrid>
        {searchkeyowrd === ''
          ? SortedPosts.map((post) => <PostItem key={post.slug} post={post} />)
          : SortedPosts.filter((post) =>
              post.data.title.toLowerCase().includes(keyword) ||
              post.data.excerpt.toLowerCase().includes(keyword)
                ? post
                : null
            )?.map((post) => <PostItem key={post.slug} post={post} />)}
      </CardsGrid>
    </section>
  )
}

export default Blog

export const getStaticProps = () => {
  const posts = getPosts()

  const SortedPosts = posts.sort((a, b) =>
    new Date(a?.data.date) < new Date(b?.data.date) ? 1 : -1
  )

  return {
    props: {
      SortedPosts,
    },
  }
}
