import Layout from "../components/Layout";
import { projects } from "../profile";
import Link from "next/link";

const Proyectos = () => (
  <div className="bg-gray-900">
    <Layout>
      <div className="row ">
        <div className="col-md-12 flex">
          <div className="card card-body text-gray-50  bg-gray-800 font-sans ">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-center text-black-500 mb-3 text-xl">
                  <strong>PROYECTOS INFORMATICOS</strong>
                </h4>
              </div>
              {projects.map(({ name, description }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card">
                    <div className="card-body text-gray-200  bg-gray-800 w-full">
                      <h3 className="font-medium text-gray-50">{name}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center bg-dark text-light mt-4"></div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default Proyectos;
