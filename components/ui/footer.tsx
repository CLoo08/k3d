import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Banner from '@/public/images/Banner-modelado.png'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5 sm:grid-cols-1 gap-8 text-sm">
              <div className="mb-2 flex items-center">
                {/* Logo */}
                <Image className="rounded-full inline-block" aria-label="Cruip" src={Banner} width={48} height={48} alt="Logo" />
                <span className="ml-2">Información del Torneo</span>
              </div>
              <div className="text-gray-400">
                <ul>
                    <li className="ml-1">
                      <span className="text-gray-400 transition duration-150 ease-in-out">Universidad Tecnológica de Panamá</span>
                    </li>
                    <li className="ml-1">
                      <span className="text-gray-400 transition duration-150 ease-in-out">Facultad de Ingeniería en Sistemas Computacionales</span>
                    </li>
                    <li className="ml-1">
                      <span className="text-gray-400 transition duration-150 ease-in-out">8 de septiembre</span>
                    </li>
                    <li className="ml-1">
                      <span className="text-gray-400 transition duration-150 ease-in-out">9:00 a.m. - 5:00 p.m.</span>
                    </li>
                </ul>
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Secciones</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="#inicio" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Home</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#habilidades" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Habilidades escenciales</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#formato" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Formato de la competencia</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#bases" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Bases de la competencia</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#cronograma" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Cronograma</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#premios" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Premios</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#inscripcion" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Inscripción</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#preguntas" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Preguntas Frecuentes</Link>
                  </li>                 
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Recursos</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://polyhaven.com/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>Polyhaven</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://ambientcg.com/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>Ambientcg</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://texture.ninja/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>Texture Ninja</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://thehappytoolbox.com/freebies" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>The Happy Tool Box</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://free3d.com/es/modelos-3d/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>Free3d</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.behance.net/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>Behance</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Patrocinador Oficial</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://www.tecology.com.pa/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>Tecology - Web</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.instagram.com/tecologypanama/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target='blank'>Tecology - Instagram</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://twitter.com/Spark_UTP" className="flex justify-center items-center text-yellow-600 bg-gray-800 hover:text-gray-100 hover:bg-yellow-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter" target='blank'>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              {/*<li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>*/}
              <li className="ml-4">
                <Link href="https://www.instagram.com/sparkutp/" className="flex justify-center items-center text-yellow-600 bg-gray-800 hover:text-gray-100 hover:bg-yellow-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram" target='blank'>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              {/*<li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
            </li>*/}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; K3D.com. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
