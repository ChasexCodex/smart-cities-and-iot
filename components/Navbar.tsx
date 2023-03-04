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
        <p className="py-2 min-w-max">
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

function Separator() {
  return (
    <div className="flex-1 flex justify-center">
      <div className="border-l-2 h-full border-white"></div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  
  const onClick = () => setOpen(p => !p)

  return (
    <div className="px-2 lg:px-10">
      <nav className="bg-gradient-to-b from-[#54c5ff] via-brand to-[#00aaff] drop-shadow-lg">
        <div className="flex px-2 justify-between mb-2 lg:hidden">
          <p className="font-bold">Explore</p>
          <MenuButton onClick={onClick}/>
        </div>
        <div className={`lg:block ${open ? '' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row font-medium divide-y-2 lg:divide-y-0 py-0.5">
            <div className="flex-1"/>
            <LinkItem href="/">Home</LinkItem>
            <Separator/>
            <LinkItem href="/people">People</LinkItem>
            <Separator/>
            <LinkItem href="/research-topics">Research Topics</LinkItem>
            <Separator/>
            <LinkItem href="/equipment">Equipment</LinkItem>
            <Separator/>
            <LinkItem href="/publications">Publications</LinkItem>
            {/*<LinkItem href="/collaborations">Collaborations</LinkItem>*/}
            {/*<LinkItem href="/projects">Projects</LinkItem>*/}
            {/*<LinkItem href="/tools">Tools</LinkItem>*/}
            {/*<LinkItem href="/contests">Contests</LinkItem>*/}
            {/*<LinkItem href="/seminars">Seminars</LinkItem>*/}
            <div className="flex-1"/>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar