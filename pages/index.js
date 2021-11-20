import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";

const Index = () => (
  <div className="bg-gray-900">
    <Layout>
    <div id="whatsapp">
    <div class="btn-whatsapp">
      <a href="https://api.whatsapp.com/send?phone=5636682021" target="_blank">
        <img src="btn_whatsapp.png" alt="..." width="70px" height="70px" />
      </a>
    </div>
  </div>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-gray-800">
            <div className="row">
              <div className="col-md-4">
                <img src="foto1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8 italic text-gray-400">
                <strong>
                  <h1>Iván Andrés Ugarte Mella</h1>
                  <br />
                  <h3>Analista de Sistemas / Programador</h3>
                  <br />
                  <p>
                    Titulado en Procesamiento de Datos, experiencia de 15 años
                    en MainFrame con Herramientas Cobol, Cics, db2, Vsam.
                    Experiencia de 2 años en Programador en Javascript (React,
                    Next, Node) Html , Css, bootstrap, tailwind
                  </p>
                  <br />
                  <Link href="/#">
                    <button class="bg-gray-600 hover:bg-gray-700 text-gray-400 font-bold py-2 px-4 rounded-full">
                      Ver Completo
                    </button>
                  </Link>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-2 italic">
        <div className="col-md-4 container">
          <div className="card text-gray-400  bg-gray-800">
            <div className="card-body">
              <center>
                <h1>
                  <strong>Habilidades</strong>
                </h1>
                <h1></h1>
              </center>
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <strong><h5>{skill}</h5></strong>
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
        <div className="col-md-8 container">
          <div className="card text-gray-400  bg-gray-800">
            <div className="card-body italic">
              <h1>
                <strong>Experiencia Profesional</strong>
              </h1>
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
              <br />
              <Link href="/#">
                <button class="bg-gray-600 hover:bg-gray-700 text-gray-400 font-bold py-2 px-4 rounded-full">
                  Ver experiencia completa 
                </button>
              </Link>
              {/* CAMBIAR ESTOS BR DE ABAJO  */}
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body text-gray-400  bg-gray-800 italic">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-center text-blue-500 mb-3 text-xl">
                  <strong>PRINCIPALES PROYECTOS</strong>
                </h4>
              </div>
              {projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body text-gray-400  bg-gray-800" >
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
            {/* <div className="text-center  mt-4">
              <Link href="/portfolio">
                <a className="btn btn-outline-light text-blue-500">
                  Más Proyectos
                </a>
              </Link>
            </div> */}
            <div className="text-center bg-dark text-light mt-4"></div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default Index;
