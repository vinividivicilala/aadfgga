import Link from 'next/link'
import * as s from '../Card/Card.styled'

type Props = {
  post: {
    slug: string
    data: {
      date: string
      title: string
      excerpt: string
      img: string
      tag: string
    }
  }
}

export const PostItem = ({ post }: Props) => {
  const { slug } = post
  const { date, title, excerpt, img } = post.data

  return (
    <s.Card as="article" key={post.slug}>
      <s.CardText>
        <s.CardSmall>{date}</s.CardSmall>
        <s.CardHeader>
          <Link href={`/blog/posts/${slug}`}>{title}</Link>
        </s.CardHeader>
        <s.CardParagraph>{excerpt}</s.CardParagraph>
      </s.CardText>
      {/* <s.CardImageContainer>
        <Link href={`/blog/posts/${slug}`} passHref>
          <s.CardImage
            src={`/imgs/posts/${img}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={15}
          />
        </Link>
      </s.CardImageContainer> */}
    </s.Card>
  )
}
