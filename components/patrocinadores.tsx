'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/images/LOGO PESA V2Prancheta 1.png',
    width: '300px', // Define el ancho deseado para la primera imagen
    height: '200px', // Define el alto deseado para la primera imagen
  },
  {
    id: 2,
    image: '/images/logo_bn.png',
    width: '300px', // Define el ancho deseado para la primera imagen
    height: '200px', // Define el alto deseado para la primera imagen
  },
];

const Patrocinadores = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 4000); // Cambia de imagen cada 5 segundos (ajusta según tus necesidades)

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <section className="py-2">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 delay-75 duration-100 ease-in-out" data-aos="fade-up">
        <div className="py-8 md:py-10 border-t border-gray-800">
          <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:max-w-none lg:py-5">
            <div className="max-w-4xl mx-auto text-center pb-5 md:pb-16"> {/* Ajusta el ancho del contenedor */}
              <h2 className="h2 mb-4" id="patrocinadores">
                  Patrocinadores
              </h2>

              <div className="relative w-full">
                  <div className="relative h-96 overflow-visible rounded-lg"> {/* Ajusta la altura a h-96 */}
                      {slides.map((slide, index) => (
                          <div
                          key={slide.id}
                          className={`${
                              index === currentSlide ? 'opacity-100' : 'opacity-0'
                          } absolute top-0 left-0 w-full h-96 transition-opacity duration-700 ease-in-out`} 
                          >
                          <Image
                              src={slide.image}
                              alt={`Slide ${index + 1}`}
                              layout="fill"
                              objectFit="contain" 
                          />
                          </div>
                      ))}
                  </div>

                  <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  {slides.map((_, index) => (
                      <button
                      key={index}
                      type="button"
                      className={`w-3 h-3 rounded-full ${
                          index === currentSlide
                          ? 'bg-white dark:bg-gray-800'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-current={index === currentSlide ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                      data-carousel-slide-to={index}
                      onClick={() => setCurrentSlide(index)}
                      ></button>
                  ))}
                  </div>
                  <button
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                  onClick={prevSlide}
                  >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                      >
                      <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                      />
                      </svg>
                      <span className="sr-only">Previous</span>
                  </span>
                  </button>
                  <button
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                  onClick={nextSlide}
                  >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                      >
                      <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                      />
                      </svg>
                      <span className="sr-only">Next</span>
                  </span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  

  );
};

export default Patrocinadores;
