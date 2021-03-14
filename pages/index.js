import Layout from '../components/Layout'
import { skills, experiences, projects } from '../profile'
import Link from 'next/link'

const Index = () => (
  <Layout>

    <header className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-secondary text-light'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='foto1.jpg' alt='' className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <h1>Iván Ugarte</h1>
              <h3>Analista de Sistemas</h3>
              <p>
                Analista de Sistemas Titulado en proceso de datos, experiencia
                de 15 años en Main Frame con Herramientas Cobol - Cics, db2,
                Vsam. Programador Junior en Javascript - React, Next, Node. Html
                , Css.
              </p>
              <a href='/hireme'>Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className='row py-2'>
      <div className='col-md-4'>
        <div className='card  bg-light'>
          <div className='card-body'>
            <h1>Habilidades</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className='py-3' key={i}>
                <h5>{skill}</h5>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='col-md-8'>
        <div className='card bg-light'>
          <div className='card-body'>
            <h1>Experiencia</h1> <br />
            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li Key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <Link href='/experiences'>
              <a className='btn btn-light'>Ver más experiencia</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-dark'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='text-center text-light'>Portafolio</h1>
            </div>
            {projects.map(({ name, description, image }, i) => (
              <div className='col-md-4 p-2' key={i}>
                <div className='card' h-100>
                  <div className='overflow'>
                    <img src={`/${image}`} alt='' className='card-img-top' />
                  </div>
                  <div className='card-body'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href='#!'>Ver Más</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center  mt-4'>
            <Link href='/portfolio'>
              <a className='btn btn-outline-light'>Más Proyectos</a>
            </Link>
          </div>
          <div className='text-center bg-dark text-light mt-4'>
              <p className='footer'>Hecho por Iván Ugarte</p>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default Index
