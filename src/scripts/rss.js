import fs from 'fs'
import { Feed } from 'feed'

const generateRSSFeed = (posts) => {
  const blogUrl = 'https://beshoi.dev/blog'
  const toolsUrl = 'https://beshoi.dev/tools'
  const author = {
    name: 'Beshoi Emad',
    email: 'beshoiemad16@gmail.com',
    link: 'https://beshoi.dev',
  }

  // Construct a new Feed object
  const feed = new Feed({
    title: 'Feed Title',
    description: 'This is my personal feed!',
    id: 'http://beshoi.dev',
    link: 'http://beshoi.dev',
    language: 'en',
    image: 'https://beshoi.dev/imgs/Beshoi.jpg',
    // favicon: 'http://beshoi.dev/favicon.ico',
    copyright: `All rights reserved 2022, Beshoi Emad`,
    updated: new Date(),
    generator: 'awesome',
    feedLinks: {
      json: 'https://beshoi.dev/json',
      atom: 'https://beshoi.dev/atom',
    },
    author: {
      name: 'Beshoi Emad',
      email: 'beshoiemad16@gmail.com',
      link: 'https://beshoi.dev',
    },
  })

  // Add each article to the feed
  posts.forEach((post) => {
    const {
      // content,
      slug,
      data: { date, excerpt, title, tag },
    } = post
    const url = tag === 'tools' ? `${toolsUrl}/${slug}` : `${blogUrl}/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description: excerpt,
      // content,
      author: [author],
      date: new Date(date),
    })
  })

  fs.writeFileSync('public/rss.xml', feed.rss2())
}

export default generateRSSFeed
