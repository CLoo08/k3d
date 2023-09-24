export const metadata = {
  title: 'King of 3D Modeling',
  description: 'Torneo de modelado 3d con la herramienta Blender en la Universidad Tecnológica de Panamá',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Cronograma from '@/components/cronograma'
import Zigzag from '@/components/zigzag'
import Bases from '@/components/bases'
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
      <Bases />
      <Cronograma />
      <Podio />
      <Patrocinadores/>
      <Inscripcion />
      <Preguntas />
    </>
  )
}
