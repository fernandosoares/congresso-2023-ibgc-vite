import { Tooltip } from 'bootstrap'
import { useContext, useEffect, useRef } from 'react'
import logo from '@/assets/img/logo.png'
import usa from '@/assets/img/usa.png'
import { AppContext } from '@/context/AppContext'

const Navigation = () => {
  const { imageSrcPrefix } = useContext(AppContext)

  const tooltipRef = useRef('')

  useEffect(() => {
    const tooltipTrigger = new Tooltip(tooltipRef.current, {
      container: 'body',
      trigger: 'hover'
    })

    return () => {
      tooltipTrigger.dispose()
    }
  }, [])

  return (
    <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#home" className="navbar-brand">
          <img src={`${imageSrcPrefix + logo}`} alt="Congesso IBGC 2023" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item d-md-flex align-items-center">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item d-md-flex align-items-center">
              <a className="nav-link" aria-current="page" href="#programacao">
                Programação
              </a>
            </li>
            <li className="nav-item d-md-flex align-items-center">
              <a className="nav-link" aria-current="page" href="#ingressos">
                Ingressos
              </a>
            </li>
            <li className="nav-item d-md-flex align-items-center">
              <a className="nav-link" aria-current="page" href="#congressos">
                Sobre
              </a>
            </li>
            <li className="nav-item d-md-flex align-items-center">
              <a
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                ref={tooltipRef}
                className="nav-link"
                target="_blank"
                aria-current="page"
                href="https://www.sympla.com.br/evento/ibgc-24-conference-network-governance-connecting-stakeholders/2042376"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="For foreign registration, please click here to be directed to an exclusive page to complete the registration process. If you have your CPF card, you can purchase your ticket by clicking on the 'Inscreva-se' button."
              >
                <img
                  src={`${imageSrcPrefix + usa}`}
                  width={32}
                  alt="USA Flag"
                />
              </a>
            </li>
            <li className="nav-item d-md-flex align-items-center">
              <a className="nav-link cta" aria-current="page" href="#ingressos">
                Inscreva-se
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
