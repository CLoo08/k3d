'use client'
import React, { useState } from 'react';

export default function Preguntas() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const preguntasRespuestas = [
    {
      pregunta: '¿Puede participar cualquier persona?',
      respuesta: 'Sí, siempre y cuando seas estudiante de alguna universidad o escuela de la República de Panamá podrás participar.',
    },
    {
      pregunta: '¿Tendrán comida?',
      respuesta: 'Si, todos los participantes inscritos contaran con una credencial que les permitirá tener acceso a nuestro coffee break y almuerzo.',
    },
    {
      pregunta: '¿Darán algún certificado de participación?',
      respuesta: 'Así es, tendremos también certificados al primer, segundo y tercer lugar de la competencia. Al igual que premios por parte de nuestro patrocinador Tecology.',
    },
    {
      pregunta: '¿Necesito tener algún conocimiento previo de modelado 3D?',
      respuesta: 'Para esta primera entrega, los participantes deben tener conocimiento sobre modelado 3D y la herramienta Blender ya que no contamos con capacitación previa al evento.',
    },
    {
      pregunta: '¿Necesito llevar mi computadora?',
      respuesta: 'La respuesta es no, gracias a nuestro querido patrocinador Tecology contaremos con máquinas en el torneo, para así poder ofrecerle la misma calidad a cada uno de los participantes por igual.',
    },
    {
      pregunta: '¿Puedo llevar mi computadora personal?',
      respuesta: 'No, para garantizar la igualdad de capacidades de hardware tendremos computadoras a tu disposición. Todas con las mismas configuraciones y el mismo rendimiento.',
    },
    {
      pregunta: '¿Puedo usar otra herramienta aparte de Blender?',
      respuesta: 'No, en esta competencia se podrá utilizar únicamente la herramienta de Blender. De poder confirmarse que se usó otra herramienta el participante será descalificado automáticamente.',
    },
    {
      pregunta: '¿Dónde puedo contactarlos?',
      respuesta: 'Cualquier otra consulta no dudes en contactarnos a nuestro Instagram: @sparkutp',
    }
    // Agrega más preguntas y respuestas según sea necesario
  ];

 return (
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-2">
          <h2 className="h2 mb-4" id='preguntas'>Preguntas Frecuentes</h2>
        </div>

        {/*<dl className='mt-2 divide-y divide-slate-100'>
          <details className='group py-4 marker:content-[""]'>
            <summary className='flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-white group-open:text-yellow-300 [&::-webkit-details-marker]:hidden'>
              AAAAAAAAAAAA
            </summary>
              <div className='pb-6 pt-6'>
                <div className='prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500'>
                  <p>
                    "HOLA"
                  </p>
                </div>
              </div>
          </details>
        </dl>*/}

        {/* Preguntas y respuestas */}
        <div className="max-w-4xl mx-auto">
          {preguntasRespuestas.map((item, index) => (
            <div
              key={index}
              className={`border-slate-300 rounded shadow mb-2 ${
                expandedIndex === index ? 'open' : ''
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`flex justify-between w-full text-xl font-semibold p-6 focus:outline-none ${
                  expandedIndex === index ? 'text-yellow-500' : ''
                }`}
                style={{ textAlign: 'left' }}
                
              >
                {item.pregunta}
                <span className="text-gray-600">{expandedIndex === index ? '-' : '+'}</span>
              </button>
              <div
                className={`answer ${expandedIndex === index ? 'open' : ''}`}
                style={{
                  maxHeight: expandedIndex === index ? '500px' : '0',
                  transition: 'max-height 0.2s ease-in-out',
                  overflow: 'hidden',
                  marginLeft: '30px',
                  marginRight: '30px',
                }}
              >
                <p className="text-white-700" style={{ whiteSpace: 'pre-wrap' }}>
                  {item.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}