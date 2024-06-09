import React from 'react'
import jg1 from "../img/Jugadores1.png";
import jg2 from "../img/Jugadores2.png";
import jg3 from "../img/Jugadores3.png";
import jg4 from "../img/Jugadores4.png";
import jg5 from "../img/Jugadores5.png";
import jg6 from "../img/Jugadores6.png";
import jg7 from "../img/Jugadores7.png";
import jg8 from "../img/Jugadores8.png";
import jg9 from "../img/Jugadores9.png";
import jg10 from "../img/Jugadores10.png";
import img1 from "../img/Equipo1.png";
import img2 from "../img/Equipo2.png";
import img4 from "../img/Equipo4.png";
import img6 from "../img/Equipo6.png";
import img9 from "../img/Equipo9.png";
import img10 from "../img/Equipo10.png";
import img11 from "../img/Equipo11.png";
import img12 from "../img/Equipo12.png";
import img13 from "../img/Equipo13.png";
import img14 from "../img/Equipo14.png";

export const Jugadores = () => {
  return (
    <div className='fondoJugadores'>
      <div className='formatoJugadores'>
        <h2>Mejores Jugadores Actualmente</h2>
        <div className='jugadores'>
          <section className='jugador1'>
            <img src={jg1} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img6} alt=''/>
              <div>
              <h3> Damian Lillard</h3>
              <p>Estrella de los Portland Trail Blazers, conocido por su habilidad para anotar y su liderazgo en momentos clave.</p>
              </div>
            </div>
          </section>

          <section className='jugador2'>
          <img src={jg2} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img2} alt=''/>
              <div>
              <h3>LeBron James</h3>
              <p>Leyenda de los Los Angeles Lakers, considerado uno de los mejores jugadores de todos los tiempos.</p>
              </div>
            </div>
          </section>

          <section className='jugador3'>
          <img src={jg3} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img11} alt=''/>
              <div>
              <h3>Kevin Durant</h3>
              <p>Estrella de los Brooklyn Nets, famoso por su habilidad para anotar y su versatilidad en la cancha.</p>
              </div>
            </div>
          </section>

          <section className='jugador4'>
          <img src={jg4} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img12} alt=''/>
              <div>
              <h3>Luka Doncic</h3>
              <p>Joven estrella de los Dallas Mavericks, destacado por su manejo del balón y su capacidad para tomar decisiones bajo presión.</p>
              </div>
            </div>
          </section>

          <section className='jugador5'>
          <img src={jg5} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img10} alt=''/>
              <div>
              <h3>Trae Young</h3>
              <p>Base de los Atlanta Hawks, conocido por su habilidad para anotar desde larga distancia</p>
              </div>
            </div>
          </section>

          <section className='jugador6'>
          <img src={jg6} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img1} alt=''/>
              <div>
              <h3>Jayson Tatum</h3>
              <p>Alero de los Boston Celtics, reconocido por su versatilidad en ambos extremos de la cancha</p>
              </div>
            </div>
          </section>

          <section className='jugador7'>
          <img src={jg7} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img13} alt=''/>
              <div>
              <h3>Jimmy Butler</h3>
              <p>Líder de los Miami Heat, conocido por su intensidad defensiva y su habilidad para anotar en momentos cruciales.</p>
              </div>
            </div>
          </section>

          <section className='jugador8'>
          <img src={jg8} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img4} alt=''/>
              <div>
              <h3>Stephen Curry</h3>
              <p>Estrella de los Golden State Warriors, famoso por su precisión en los tiros de larga distancia.</p>
              </div>
            </div>
          </section>

          <section className='jugador9'>
          <img src={jg9} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img9} alt=''/>
              <div>
              <h3>LaMelo Ball</h3>
              <p>Prometedor base de los Charlotte Hornets, conocido por su habilidad para pasar el balón y su creatividad en la cancha.</p>
              </div>
            </div>
          </section>

          <section className='jugador10'>
          <img src={jg10} alt='' className='fotojg1'/>
            <div className='info-jg1'>
              <img src={img14} alt=''/>
              <div>
              <h3>Zion Williamson</h3>
              <p>Alero de los New Orleans Pelicans, destacado por su fuerza física y su habilidad para volcar el balón.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
