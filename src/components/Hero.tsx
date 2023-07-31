import { AppContext } from '@/context/AppContext'
import video from '@assets/video/hero.mp4'
import { useContext } from 'react'

const Hero = () => {
  const { imageSrcPrefix } = useContext(AppContext)
  return (
    <>
      <section id="home">
        <video className="d-none d-md-block" autoPlay loop muted>
          <source src={`${imageSrcPrefix + video}`} type="video/mp4" />
        </video>
        <div className="container d-block d-md-none">
          <div className="row hero-row">
            <div className="col-12">
              <div className="heading">
                <h1>
                  <span>Governança em rede:</span>
                  <br />
                  Conectando stakeholders
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="event-description">
        <div className="container-fluid information">
          <div className="row">
            <div className="col-12 col-md-8 desc">
              <p>
                Em um mundo globalizado e hiper conectado, a inteligência e ação
                coletivas tornam-se condições indispensáveis para a perenidade
                de uma organização. E, para isso, os agentes de governança
                precisam ampliar o seu olhar para todas as partes interessadas.
              </p>
              <p>
                Neste cenário, as organizações estão potencializando as conexões
                com seus stakeholders para alcançarem esses objetivos? E você,
                como agente de governança, tem incorporado esse olhar
                estratégico em sua atuação?
              </p>
              <p>
                <span>Governança em rede: Conectando stakeholders</span> será o
                tema principal do 24º Congresso IBGC, nos dias 17 e 18 de
                outubro de 2023, em formato híbrido.{' '}
              </p>
              <p>Vamos refletir e agir juntos!</p>
            </div>
            <div className="col-12 col-md-4 dates">
              <p className="date">17 e 18 de outubro de 2023</p>
              <div className="address">
                <p className="location__line_1">WTC Events Center | SP</p>
                <p className="location__line_2">
                  <a
                    href="https://www.google.com/maps/place/Instituto+Brasileiro+Governanca+Corporativa+-+IBGC/@-23.6087752,-46.6971822,15z/data=!4m6!3m5!1s0x94ce5a7234b1a1c9:0x57b64a39ecb00f89!8m2!3d-23.6087752!4d-46.6971822!16s%2Fg%2F1vgqf6kh?entry=ttu"
                    target="_blank"
                  >
                    Av.das Nações Unidas, 12551 Brooklin Novo, São Paulo - SP
                    04578-903
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
