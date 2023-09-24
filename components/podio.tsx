'use client'
import React from 'react';
import Image from 'next/image'

import Monitor from '@/public/images/Monitor.webp'
import certficiado150 from '@/public/images/premio150.png'
import certficiado100 from '@/public/images/premio100.png'

const Podium = () => {
  return (
    <section className="py-2"> {/* Redujimos el padding vertical para hacer la sección más corta */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 delay-75 duration-100 ease-in-out" data-aos="fade-up">
      <div className="py-8 md:py-10 border-t border-gray-800">
        <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-16"> {/* Ajustamos el padding vertical aquí también */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16"> {/* Ajustamos el padding vertical aquí también */}
            <h2 className="h2 mb-4" id='premios'>Premios</h2>
          </div>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-grey-900 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image className="h-full w-100 object-cover object-center" src={Monitor}  alt="Premio 1" />
                </div>
                <h3 className="mt-6 text-sm text-white-500">
                    Monitor de 27" - SMI EM27M6W Curvo FullHD
                </h3>
                <p className="text-base font-semibold text-white-900">Primer Lugar</p>
              </div>
              <div className="group relative">
                <div className="relative h-full w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image className="h-full w-full object-cover object-center" src={certficiado150}  alt="Premio 2" />
                </div>
                <h3 className="mt-6 text-sm text-white-500">
                    Certificado de $150 para actualizaciones en Tecology
                </h3>
                <p className="text-base font-semibold text-white-900">Segundo Lugar</p>
              </div>
              <div className="group relative">
                <div className="relative h-full w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image className="h-full w-full object-cover object-center" src={certficiado100}  alt="Premio 3" />
                </div>
                <h3 className="mt-6 text-sm text-white-500">
                    Certificado de $100 para actualizaciones en Tecology
                </h3>
                <p className="text-base font-semibold text-white-900">Tercer Lugar</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Podium;
