import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";

const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body  bg-gray-400">
          <div className="row">
            <div className="col-md-4">
              <img src="foto1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8 italic text-gray-900">
              <strong>
                <h1>Iván Ugarte</h1>
                <br />
                <h3>Analista de Sistemas</h3>
                <br />
                <p>
                  Titulado en Procesamiento de Datos, experiencia de 15 años en
                  MainFrame con Herramientas Cobol, Cics, db2, Vsam. Experiencia
                  de 2 años en Programador en Javascript (React, Next, Node)
                  Html , Css, bootstrap, tailwind
                </p>
                <br />
                <Link href="/experiences">
                  <a className="btn btn-light bg-blue-500 bg-opacity-50">
                    <strong>Saber más</strong>
                  </a>
                </Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="row py-2 ">
      <div className="col-md-4">
        <div className="card  bg-light">
          <div className="card-body bg-gray-300">
            <center>
              <h1>
                <strong>Habilidades</strong>
              </h1>
              <h1>
                <strong>Conocimiento de cero a 100%</strong>
              </h1>{" "}
            </center>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3 " key={i}>
                <h5>{skill}</h5>
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
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body bg-gray-300 italic">
            <h1>
              <strong>Experiencia Profesional</strong>
            </h1>{" "}
            <br />
            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li Key={i}>
                  <h3>
                    <strong>{title}</strong>
                  </h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                  <br />
                </li>
              ))}
            </ul>
            <br />
            <Link href="/experiences">
              <a className="btn btn-light bg-blue-500 bg-opacity-50">
                <strong>Ver más experiencia</strong>
              </a>
            </Link>
            {/* CAMBIAR ESTOS BR DE ABAJO  */}
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-gray-300">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center text-blue-500 mb-3 text-xl italic">
                <strong>PRINCIPALES PROYECTOS</strong>
              </h4>
            </div>
            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card" h-100>
                  <div className="overflow">
                    <img src={`/${image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a className="text-blue-500" href="#!">
                      Ver Más
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center  mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light text-blue-500">
                Más Proyectos
              </a>
            </Link>
          </div>
          <div className="text-center bg-dark text-light mt-4"></div>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default Index;
