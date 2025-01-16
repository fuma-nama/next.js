'use client'
import { useParams } from 'next/navigation'
import type { ReactNode } from 'react'

export function Body({ children }: { children: ReactNode }) {
  const { slug } = useParams() as { slug?: string[] }

  if (!slug) return children
  let color: string | undefined

  if (slug[0] === 'app') color = `221.21 83.19% 65.33%`
  else if (slug[0] === 'pages') color = '271.48 81.33% 65.88%'
  return (
    <>
      {color ? (
        <style>
          {`:root {
            --fd-primary: ${color};
        }`}
        </style>
      ) : null}
      {children}
    </>
  )
}
