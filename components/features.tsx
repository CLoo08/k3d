export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6">
      <div className="py-10 md:py-8 border-t border-gray-800">
          <div className="py-8 md:py-10">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">¿Qué es <span className="text-yellow-500">King of 3D</span>?</h2>
              <p className="text-xl text-gray-400">Es un torneo intenso, en donde los competidores se embarcarán en un desafiante duelo de modelado 3D, donde pondrán a prueba sus habilidades hasta el límite.</p>
            </div>
            

            {/* Items */}
            
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4" id="habilidades">Habilidades Escenciales</h2>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

              {/* 1st item mod*/}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4 text-black" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-yellow-500" cx="32" cy="32" r="32" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                    transform="translate(15, 16) scale(1.5)"
                  />
                </svg>
                <h4 className="h4 mb-2">Conocimiento de Blender</h4>
                <p className="text-lg text-gray-400 text-center">Dominio de la interfaz, herramientas y navegación en 3D</p>
              </div>
                          
              {/* 2nd item */}
              
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4 text-black" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-yellow-500" cx="256" cy="256" r="256" />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
                  transform="scale(0.7) translate(90, 90)"
                  />

                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M69 153.99l187 110 187-110M256 463.99v-200" 
                  transform="scale(0.7) translate(90, 90)"
                  />
                </svg>

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="w-3/4 h-3/4">
                    {/* Aquí puedes colocar el contenido del cubo */}
                  </div>
                </div>
                <h4 className="h4 mb-2">Modelado 3D</h4>
                <p className="text-lg text-gray-400 text-center">Creación de formas, extrusión, subdivisión y técnicas avanzadas</p>
                
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4 text-black" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current text-yellow-500" width="64" height="64" rx="32" />
                  <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <ellipse className="stroke-current text-black" cx="11" cy="11" rx="5.5" ry="11" />
                    <path className="stroke-current text-black" d="M11 0v22M0 11h22" />
                    <circle className="stroke-current text-black" cx="11" cy="11" r="11" />
                  </g>
                </svg>
                <h4 className="h4 mb-2">Topología y Optimización</h4>
                <p className="text-lg text-gray-400 text-center">Entender distribución de vértices, flujo y optimización</p>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current text-yellow-500" width="64" height="64" rx="32" />
                  <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <path className="stroke-current text-black" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                    <circle className="stroke-current text-black" cx="13" cy="9" r="3" />
                  </g>
                </svg>
                <h4 className="h4 mb-2">Creatividad</h4>
                <p className="text-lg text-gray-400 text-center">Aplicación de texturas, mapas y manipulación de materiales</p>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                  <svg className="w-[30px] h-[30px]  text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 14 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z"
                    />
                  </svg>
                </div>
                <h4 className="h4 mb-2">Iluminación y Renderizado</h4>
                <p className="text-lg text-gray-400 text-center">Configuración de luces, sombras y ajuste de renderizado</p>
              </div>

              {/* 6th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
                  </g>
                </svg>
              </div>          
                <h4 className="h4 mb-2">Composición/Presentación</h4>
                <p className="text-lg text-gray-400 text-center">Habilidad en enmarcar y presentar modelos de forma atractiva.</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}
