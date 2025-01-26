import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { styled } from 'stitches.config'

export { NavLink }

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

NavLink.defaultProps = {
  exact: false,
}

export const StyledLink = styled('a', {
  textDecoration: 'none',
})

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  return (
    <Link href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </Link>
  )
}
