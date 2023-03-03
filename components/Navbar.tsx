'use client'

import {PropsWithChildren, useState} from 'react'
import Link from 'next/link'

type LinkListItemProps = PropsWithChildren<{
  href: string
}>

function LinkItem({href, children}: LinkListItemProps) {
  return (
    <li>
      <Link href={href}>
        <p className="py-1 px-1 min-w-max">
          {children}
        </p>
      </Link>
    </li>
  )
}

function MenuButton({onClick}: {onClick: () => void}) {
  return (
    <button onClick={onClick}>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"/>
      </svg>
    </button>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  
  const onClick = () => setOpen(p => !p)
  
  return (
    <div className="px-2 lg:px-10">
      <nav className="py-2 bg-gradient-to-b from-orange-50 via-brand to-orange-50">
        <div className="flex px-2 justify-between mb-2 lg:hidden">
          <p className="font-bold">Explore</p>
          <MenuButton onClick={onClick}/>
        </div>
        <div id="navbar-collapsable" className={`lg:block ${open ? '' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row justify-center font-semibold divide-y-2 lg:divide-y-0 lg:divide-x-2 p-1">
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/people">People</LinkItem>
            <LinkItem href="/research-topics">Research Topics</LinkItem>
            <LinkItem href="/equipment">Equipment</LinkItem>
            <LinkItem href="/publications">Publications</LinkItem>
            <LinkItem href="/collaborations">Collaborations</LinkItem>
            <LinkItem href="/projects">Projects</LinkItem>
            <LinkItem href="/tools">Tools</LinkItem>
            <LinkItem href="/contests">Contests</LinkItem>
            <LinkItem href="/seminars">Seminars</LinkItem>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar