export const metadata = {
  title: 'King of 3D Modeling',
  description: 'Torneo de modelado 3d con la herramienta Blender en la Universidad Tecnológica de Panamá',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Podio from '@/components/podio'
import Patrocinadores from '@/components/patrocinadores'
import Inscripcion from '@/components/inscripcion'
import Preguntas from '@/components/preguntas'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <Podio />
      <Patrocinadores/>
      <Inscripcion />
      <Preguntas />
    </>
  )
}
