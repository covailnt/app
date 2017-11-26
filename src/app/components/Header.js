import Link from 'next/link'
import React from 'react'
export default ({ pathname }) => (
  <header>
    <Link href="/">
      <a className={pathname === '/' && 'is-active'}>Hello</a>
    </Link>{' '}
    <Link href="/about">
      <a className={pathname === '/about' && 'is-active'}>World</a>
    </Link>
  </header>
)
