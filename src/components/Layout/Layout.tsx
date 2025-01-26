import React from 'react'
import { Header, Footer } from '..'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="container">
        <Header />
        <main className="flow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
