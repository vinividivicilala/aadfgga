import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  title: string
  description: string
}

export const Meta = ({ title, description }: Props) => {
  const router = useRouter()
  const MetaInfo = {
    title: 'Beshoi Emad - Front End Developer',
    description: `Front-end developer, Tech Reviewer, and It Stuff.`,
    content:
      'html, css, flex, grid, js, react, blog, tools, extensions, terminal, commandline, bash, zsh, powershell, linux, arch, i3wm, package manager, vim, neovim, tutorials, tips, tricks, Beshoi Emad',
    image: 'https://beshoi.dev/imgs/beshoi.jpg',
    type: 'website',
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="keywords" content={MetaInfo.content} />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <title>{title ? title : MetaInfo.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description ? description : MetaInfo.description} name="description" />
        <meta property="og:url" content={`https://beshoi.dev${router.asPath}`} />
        <link rel="canonical" href={`https://beshoi.dev${router.asPath}`} />
        <meta property="og:type" content={MetaInfo.type} />
        <meta property="og:site_name" content="Beshoi Emad" />
        <meta property="og:description" content={MetaInfo.description} />
        <meta property="og:title" content={MetaInfo.title} />
        <meta property="og:image" content={MetaInfo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@beshoi_emad" />
        <meta name="twitter:title" content={MetaInfo.title} />
        <meta name="twitter:description" content={MetaInfo.description} />
        <meta name="twitter:image" content={MetaInfo.image} />
        {/* {MetaInfo.date && <meta property="article:published_time" content={MetaInfo.date} />} */}
      </Head>
    </>
  )
}
