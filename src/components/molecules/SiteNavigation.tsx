import React, { ReactNode } from 'react'
import Link from 'next/link'

const SiteNavigation = () => (
  <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
    <Link href="/">
      <a className="mr-5">Bundesliga standings</a>
    </Link>
    <Link href="/about">
      <a className="mr-5">Teams</a>
    </Link>
  </nav>
)

export interface SiteNavigationProps {
  children?: ReactNode
}

export default SiteNavigation
