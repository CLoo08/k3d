export default function Inscripcion() {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 delay-75 duration-100 ease-in-out" data-aos="fade-up">
        <div className="py-8 md:py-10 border-t border-gray-800">
          <div className="mx-auto max-w-2xl sm:py-16 lg:max-w-none lg:py-16"> {/* Ajustamos el padding vertical aquí también */}
            <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16"> {/* Ajustamos el padding vertical aquí también */}
              <h2 className="h2 mb-4" id='premios'>Formulario de Inscripción</h2>
            </div>
            <div className="text-center">
              <a
                href="https://forms.gle/e5U9Fyyqy1JbioXc8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-blue-700 hover:text-white text-black text-xl font-semibold py-2 px-4 rounded-full"
              >
                Accede haciendo clic aquí
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
