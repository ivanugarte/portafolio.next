import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";
import Image from "next/image"

const Index = () => (
  <div className="bg-gray-900">
    <Layout>
      <header className="row mt-08">
        <div className="col-md-12">
          <div className="card card-body bg-gray-800">
            <div className="row">
              <div className="col-md-4">
                <Image src={"/ivanfotoperfilcolor.webp"} width={200} height={200} alt="" className="img-fluid" />
              </div>
              <div className="col-md-8 font-sans text-gray-50">
                <h1 className="text-2xl">Iván Andrés Ugarte Mella</h1>
                <h1 className="font-medium ">
                  Analista de Sistemas - Programador
                </h1>
                <br />
                <p>
                  Titulado en Procesamiento de Datos, experiencia de 15 años en
                  MainFrame con Herramientas Cobol, Cics, db2, Vsam. Experiencia
                  de 3 años en Programando en Javascript (React, Next, Node)
                  Html , Css, bootstrap, tailwind, Mysql, Prisma (Páginas web, sistemas)
                </p>
                <br />
                <Link href="/curriculo">
                  <button className="bg-gray-600 hover:bg-gray-700 text-gray-50 font-bold py-2 px-4 rounded-full">
                    Ver Más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-4 font-sans ">
        <div className="col-md-4">
          <div className="card text-gray-50 bg-gray-800">
            <div className="card-body">
              <center>
                <h1>
                  <strong>Habilidades</strong>
                </h1>
                <h1></h1>
              </center>
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <strong>
                    <h5>{skill}</h5>
                  </strong>
                  <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8 flex flex-grow">
          <div className="card   bg-gray-800">
            <div className="card-body font-sans text-gray-50">
              <h1 className="font-medium">Experiencia Laboral</h1>
              <br />
              <ul>
                {experiences
                .filter((n) => n.id < 5)
                .map(
                  ({ id, company, from, to, description }, i) => (
                    <div key={i}>
                      <li>
                        <h1 className="text-gray-100">
                          {id} {company} {from} hasta {to}
                        </h1>
                        <p className="text-gray-300">{description}</p>
                        <br />
                      </li>
                    </div>
                  )
                )}
              </ul>
              <Link href="/experiencia">
                <button className="bg-gray-600 hover:bg-gray-700 text-gray-50 font-bold py-2 px-4 rounded-full">
                  Ver experiencia completa
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-12 flex">
          <div className="card card-body text-gray-50  bg-gray-800 font-sans ">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-center text-black-500 mb-3 text-xl">
                  <strong>PRINCIPALES PROYECTOS</strong>
                </h4>
              </div>
              {projects.map(({ name, description }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card">
                    <div className="overflow">
                    </div>
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

export default Index;
