// app/layout.tsx
import { Layout } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'HIDRA Docs',
  description: 'HIDRA documentation',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
