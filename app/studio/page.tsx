"use client"

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamically import the Sanity Studio iframe bundle to avoid SSR issues
const Studio = dynamic(() => import('../../sanity/studio/StudioEntry').then((m) => m.Studio), { ssr: false })

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return <Studio />
}
