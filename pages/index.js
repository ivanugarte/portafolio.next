import Layout from '../components/Layout'
import { skills } from '../profile'

const Index = () => (
  <Layout>
    <header className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-secondary text-light'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='foto.jpg' alt='' className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <h1>Iván Ugarte</h1>
              <h3>Analista de Sistemas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                ad id aut in architecto illum reprehenderit rerum minima tempora
                vitae.
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
              <div className='py-3' jey={i}>
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
            <h1>Experiencia</h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index
