'use client'; // Agrega esta línea para marcar el componente como un componente de cliente

import PageIllustration from '@/components/page-illustration'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">

      <PageIllustration />

      {children}

    </main>
  )
}
