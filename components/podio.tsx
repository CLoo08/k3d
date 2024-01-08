'use client'
import React from 'react';
import Image from 'next/image'

import Monitor from '@/public/images/Monitor.webp'
import certficiado100 from '@/public/images/Card_Tecology100.webp'
import certficiado150 from '@/public/images/Card_Tecology150.webp'

const Podium = () => {
  return (
    <section className="py-2"> {/* Redujimos el padding vertical para hacer la sección más corta */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 delay-75 duration-100 ease-in-out" data-aos="fade-up">
      <div className="py-4 md:py-6 border-t border-gray-800">
        <div className="mx-auto max-w-2xl py-12 sm:py-8 lg:max-w-none lg:py-10"> {/* Ajustamos el padding vertical aquí también */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10"> {/* Ajustamos el padding vertical aquí también */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" id='premios'>Premios</h2>
          </div>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-grey-900 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 cursor-pointer">
                <Image className="h-full w-100 object-cover object-center" src={Monitor}  alt="Premio 1" />
                </div>
                <h3 className="mt-6 text-sm text-white-500">
                  <ul className="list-disc ml-5">
                    <li>Monitor de 27" - SMI EM27M6W Curvo FullHD</li>
                    <li>Teclado Rog Strix Scope RX</li>
                    <li>$100 en efectivo</li>
                  </ul>           
                </h3>
                <p className="text-base font-semibold text-yellow-500 italic">Primer Lugar</p>
              </div>
              <div className="group relative">
                <div className="relative h-full w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 cursor-pointer">
                  <Image className="h-full w-full object-cover object-center" src={certficiado150}  alt="Premio 2" />
                </div>
                <h3 className="mt-6 text-sm text-white-500">
                    Certificado de $150 para actualizaciones en Tecology
                </h3>
                <p className="text-base font-semibold text-yellow-500 italic">Segundo Lugar</p>
              </div>
              <div className="group relative">
                <div className="relative h-full w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 cursor-pointer">
                  <Image className="h-full w-full object-cover object-center" src={certficiado100}  alt="Premio 3" />
                </div>
                <h3 className="mt-6 text-sm text-white-500">
                    Certificado de $100 para actualizaciones en Tecology
                </h3>
                <p className="text-base font-semibold text-yellow-500 italic">Tercer Lugar</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Podium;
