import React from 'react'
import Image from 'next/image'
import { navItems } from './NavItems'
import { NavLink } from './NavLink'
import { styled } from 'stitches.config'

type Props = {}

const Nav = styled('nav', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const NavList = styled('ul', {
  p: '$0',
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '$5',
})

const NavItem = styled('li', {
  fontSize: '$2',
  '& img': {
    borderRadius: '100%',
  },
})

const Headerimg = styled(Image, {
  borderRadius: '$4',
})

export const Header = (props: Props) => {
  return (
    <header>
      <Nav>
        <NavLink exact href="/">
          <Headerimg
            src="/imgs/Beshoi.jpg"
            alt="profile-picture"
            layout="fixed"
            width="50px"
            height="50px"
            priority
          />
        </NavLink>

        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <NavLink exact href={item.link}>
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </header>
  )
}
