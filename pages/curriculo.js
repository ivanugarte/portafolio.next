import Layout from "../components/Layout";

const Proyectos = () => (
  <div className="bg-gray-900">
    <Layout>
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-8">
        <h1 className="text-3xl text-center font-sans text-blue-700 font-bold">
          Currículo Cronológico
        </h1>
        <div className="border-l-2 mt-10">
          {/* <!-- Card 1 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg font-bold">
              Empresa: Cloudata  Marzo de 2019 a Noviembre de 2019
              </h1>
              <h1 className="text-sm">
              Cargo: Analista Programador
              </h1>
              <h1 className="text-m font-bold">
                Sistemas: sistema ERP sistemas de administración a medida para
                empresa Ambiente: Plataforma baja (windows, Visual Cobol – Micro
                Focus) Programación: Visual Cobol Base de datos: en SQL
              </h1>
            </div>
            {/* <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a> */}
          </div>

          {/* <!-- Card 2 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg font-bold">
                Empresa: Cloudata  Marzo de 2019 a Noviembre de 2019
              </h1>
              <h1 className="text-sm font-medium">
                Cargo: Analista Programador
              </h1>
              <h1 className="text-m font-medium">
                Sistemas: sistema ERP sistemas de administración a medida para
                empresa Ambiente: Plataforma baja (windows, Visual Cobol – Micro
                Focus) Programación: Visual Cobol Base de datos: en SQL.
              </h1>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg font-bold">
                Empresa: Cloudata  Marzo de 2019 a Noviembre de 2019
              </h1>
              <h1 className="text-sm font-medium">
                Cargo: Analista Programador
              </h1>
              <h1 className="text-m font-medium">
                Sistemas: sistema ERP sistemas de administración a medida para
                empresa Ambiente: Plataforma baja (windows, Visual Cobol – Micro
                Focus) Programación: Visual Cobol Base de datos: en SQL.
              </h1>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg font-bold">
                Empresa: Cloudata  Marzo de 2019 a Noviembre de 2019
              </h1>
              <h1 className="text-sm font-medium">
                Cargo: Analista Programador
              </h1>
              <h1 className="text-m font-medium">
                Sistemas: sistema ERP sistemas de administración a medida para
                empresa Ambiente: Plataforma baja (windows, Visual Cobol – Micro
                Focus) Programación: Visual Cobol Base de datos: en SQL.
              </h1>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
            {/* <!-- Dot Follwing the Left Vertical Line --> */}
            <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

            {/* <!-- Line that connecting the box with the vertical line --> */}
            <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

            {/* <!-- Content that showing in the box --> */}
            <div className="flex-auto">
              <h1 className="text-lg font-bold">
                Empresa: Cloudata  Marzo de 2019 a Noviembre de 2019
              </h1>
              <h1 className="text-sm font-medium">
                Cargo: Analista Programador
              </h1>
              <h1 className="text-m font-medium">
                Sistemas: sistema ERP sistemas de administración a medida para
                empresa Ambiente: Plataforma baja (windows, Visual Cobol – Micro
                Focus) Programación: Visual Cobol Base de datos: en SQL.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default Proyectos;
