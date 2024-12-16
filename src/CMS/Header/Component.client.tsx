'use client'

import React from 'react'
import Link from 'next/link'
import { HeaderNav } from './Nav'
import { Logo } from '@components/Logo/Logo'

import type { Header } from '@payload-types'
// import { useHeaderTheme } from '@providers/HeaderTheme'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  // const [theme, setTheme] = useState<string | null>(null)
  // const { headerTheme, setHeaderTheme } = useHeaderTheme()
  // const pathname = usePathname()

  // useEffect(() => {
  //   setHeaderTheme(null)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname])

  // useEffect(() => {
  //   if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [headerTheme])

  return (
    <header
      className="container relative z-20"
      // {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="flex justify-between py-8">
        <Link href="/">
          <Logo
            loading="eager"
            priority="high"
            className="invert dark:invert-0"
          />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}