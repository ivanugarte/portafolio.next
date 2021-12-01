import Layout from "../components/Layout";
import { experiences } from "../profile";

const Proyectos = () => (
  <div className="bg-gray-900">
    <Layout>
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-8">
        <h1 className="text-3xl text-center font-sans text-blue-700 font-bold">
          Currículo Cronológico
        </h1>
        <div className="border-l-2 mt-10">
          {experiences.map(({ id, company, from, to, description }, i) => (
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0" key={i}>
              <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
              <div className="flex-auto">
                <h1 className="text-gray-100">
                  {company} {from} hasta {to} <br /> <br /></h1>
                <h1 className="text-gray-300"> {description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  </div>
);

export default Proyectos;
