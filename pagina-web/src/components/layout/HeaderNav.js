import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <h3>El Arte de <span>Basketball</span></h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/historia" className={({ isActive }) => isActive ? "active" : ""}>Historia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/equipos" className={({ isActive }) => isActive ? "active" : ""}>Equipos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jugadores" className={({ isActive }) => isActive ? "active" : ""}>Jugadores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
