'use client'

import Link from 'next/link'
import {PropsWithChildren} from 'react'

type Props = PropsWithChildren<{
  route: string
}>

export default function ClientSideRoute({children, route}: Props) {
  return <Link href={route}>{children}</Link>
}