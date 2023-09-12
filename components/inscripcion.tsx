export default function Inscripcion() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-2">
            <h2 className="h2 mb-4" id="inscripcion">Formulario de Inscripción</h2>
          </div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <iframe
              width="800px"
              height="660px"
              src="https://forms.gle/d7Wc7UFMVC3Wz4No7"
              className="border-none max-w-full max-h-screen"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
