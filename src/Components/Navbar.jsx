import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import LogoDh from '/DH.ico'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContextGlobal() 

  const toggleTheme = () => {
    console.log(state.theme)
    dispatch( {type: "TOGGLE_THEME", payload: state.theme === true ? false : true} )
  }

  return (
    <nav className={state.theme === true ? "dark" : ""}>
      <div className='nav-options'>
        <Link to={routes.home}>
          <img src={LogoDh} alt='Logo Proyecto'></img>
        </Link>
        <h1>ODONTO</h1>
      </div>
      <div className='nav-options'>
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contact}><h4>Contact</h4></Link>
        <Link to={routes.favs}><h4>Favs</h4></Link>
        <button onClick={toggleTheme} className='theme-toggle'>{state.theme === true ? '☀️' : '🌙'}</button>
      </div>
      
    </nav>
  )
}

export default Navbar