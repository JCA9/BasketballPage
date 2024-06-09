import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer'>
      {/* &copy; Portafolio Jesús Alejandro Cadenas Acevedo  */}
      <div className='container-footer'>
      <div className="footer-section">
        <h3>Enlaces de interés</h3>
        <ul>
          <li><a href="https://www.sportingnews.com/mx/nba?gr=www">Página Oficial NBA</a></li>
          <li><a href="https://www.espn.com.mx/basquetbol/">Página Oficial ESPN</a></li>
          <li><a href="https://www.redbull.com/car-es/10-datos-del-baloncesto-que-no-conocias">Datos Interesantes del Basketball</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Información de contacto</h3>
        <p>Email: jesu.uni.edu@gmail.com</p>
        <p>GitHub: <a href="https://github.com/JCA9">https://github.com/JCA9</a></p>
      </div>
      <div className="footer-section">
        <h3>Información sobre el sitio</h3>
        <p>Copyright © 2024 Jesús Alejandro Cadenas Acevedo.</p>
        <p>Todos los derechos reservados</p>
      </div>
      </div>
    </footer>
  )
}
