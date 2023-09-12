import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" id='bases'>Bases de la Competencia</h2>
            <p className="text-xl text-gray-400">La competición se desarrollará en un emocionante día, durante el cual los participantes deberán enfrentarse a una 
            desafiante premisa aleatoria que será revelada al inicio.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="relative inline-flex flex-col">
                <svg className="rounded-full w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width={48} height={48}>
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                </svg>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <h4 className="h4 mb-3 ml-6">Tiempo Límite</h4>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— La competición tendrá una duración aproximada de 6 a 7 horas, en las cuales los participantes deberán crear de 0 todos sus modelos, los cuales, tendrán que estar debidamente renderizados a la hora de la calificación.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Duración de la competencia</cite> - <a className="text-yellow-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">K3D</a>
              </div>
            </div>

            {/* 2st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="relative inline-flex flex-col">
                    <svg className="rounded-full w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <h4 className="h4 mb-3 ml-6">Participantes</h4>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Este torneo tendrá un máximo de 10 a 12 participantes de manera individual. Deberán ser estudiantes activos de alguna universidad o colegio.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Cantidad de Participantes</cite> - <a className="text-yellow-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">K3D</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center mb-4">
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                  </svg>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <h4 className="h4 mb-3 ml-6">Disposición</h4>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— El torneo se llevará a cabo en las instalaciones de la Universidad Tecnológica de Panamá.
              Todos los competidores deberán estar en el lugar indicado por la organización al momento para participar en el evento.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Ubicación, formato y duración</cite> - <a className="text-yellow-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">K3D</a>
              </div>
            </div>

            {/* 4to testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="relative inline-flex flex-col">
                    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
                    </svg>
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <h4 className="h4 mb-3 ml-6">Herramienta 3D</h4>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Cada participante deberá utilizar de manera exclusiva la herramienta Blender para llevar a cabo su trabajo.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Herramienta</cite> - <a className="text-yellow-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">K3D</a>
              </div>
            </div>

            {/* 5to testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="relative inline-flex flex-col">
                  <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                  </svg>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <h4 className="h4 mb-3 ml-6">Referencias</h4>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Está permitido que los participantes busquen referencias que les ayuden a inspirarse para el tema de su modelo.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Modelos como referencia</cite> - <a className="text-yellow-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">K3D</a>
              </div>
            </div>

            {/* 6to testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="relative inline-flex flex-col">
                  <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7h20ZM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2H0Z"/>
                  </svg>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <h4 className="h4 mb-3 ml-6">Equipo</h4>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— A todos los participantes de esta competición se les brindará acceso a computadoras sobre las cuales
              tendrán que crear todos sus modelos de manera exclusiva, de lo contrario, el trabajo NO será tomado en cuenta.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Manejo del equipo</cite> - <a className="text-yellow-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">K3D</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
