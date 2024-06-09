import React from 'react'
import img1 from "../img/Equipo1.png";
import img2 from "../img/Equipo2.png";
import img3 from "../img/Equipo3.png";
import img4 from "../img/Equipo4.png";
import img5 from "../img/Equipo5.png";
import img6 from "../img/Equipo6.png";
import img7 from "../img/Equipo7.png";
import img8 from "../img/Equipo8.png";
import img9 from "../img/Equipo9.png";
import img10 from "../img/Equipo10.png";

export const Equipos = () => {
  return (
    <div className='fondoEquipos'>
      <div className='formatoEquipos'>
        <h2>Equipos NBA</h2>
        <section className='equipo1'>
          <img src={img1} alt='' />
          <div>
            <h3>Boston Celtics</h3>
            <p>Fundados en 1946, los Boston Celtics son una de las 
              franquicias más exitosas en la historia de la NBA, con
               17 campeonatos en su haber. Han sido el hogar de leyendas 
               como Bill Russell, Larry Bird y Paul Pierce. Con una 
               cultura de equipo sólida y una base de fanáticos 
               apasionados, los Celtics continúan siendo contendientes 
               en la liga.</p>
          </div>
        </section>

        <section className='equipo2'>
          <img src={img2} alt='' />
          <div>
            <h3>Los Angeles Lakers:</h3>
            <p>Oficialmente conocidos como Los Angeles Lakers, 
              este equipo ha sido una potencia en la NBA durante 
              décadas. Con 17 campeonatos de la NBA, los Lakers han 
              tenido una lista impresionante de estrellas, incluyendo 
              a Magic Johnson, Kareem Abdul-Jabbar, Kobe Bryant y ahora 
              LeBron James. Su base de seguidores abarca todo el mundo, 
              y su rivalidad con los Celtics es legendaria.</p>
          </div>
        </section>

        <section className='equipo3'>
          <img src={img3} alt='' />
          <div>
            <h3>Chicago Bulls</h3>
            <p>Los Chicago Bulls son conocidos por su dominio en la 
              década de 1990, cuando Michael Jordan lideró al equipo 
              a seis campeonatos de la NBA. Junto con Jordan, figuras 
              como Scottie Pippen y Dennis Rodman formaron un equipo 
              legendario. Aunque han pasado años desde su última victoria 
              en los playoffs, los Bulls mantienen una base de seguidores
              leales.</p>
          </div>
        </section>

        <section className='equipo4'>
          <img src={img4} alt='' />
          <div>
            <h3>Golden State Warriors</h3>
            <p>Anteriormente conocidos como los San Francisco Warriors, 
              los Golden State Warriors han sido una fuerza dominante en 
              la NBA en los últimos años. Con tres campeonatos en cinco 
              años (2015, 2017 y 2018), los Warriors se han destacado por 
              su estilo de juego innovador y lanzamientos de tres puntos. 
              Estrellas como Stephen Curry, Klay Thompson y Draymond 
              Green han llevado al equipo al éxito.</p>
          </div>
        </section>

        <section className='equipo5'>
          <img src={img5} alt='' />
          <div>
            <h3>Toronto Raptors</h3>
            <p>Como el único equipo de la NBA con sede fuera de los 
              Estados Unidos, los Toronto Raptors representan a toda 
              una nación en Canadá. Ganaron su primer campeonato de la 
              NBA en 2019, liderados por Kawhi Leonard. Aunque son 
              relativamente nuevos en términos de historia de la NBA, 
              los Raptors han construido una base de seguidores sólida y 
              una cultura de equipo única.</p>
          </div>
        </section>

        <section className='equipo6'>
          <img src={img6} alt='' />
          <div>
            <h3>Milwaukee Bucks</h3>
            <p>Los Milwaukee Bucks han tenido altibajos en su historia, 
              pero recientemente han experimentado un resurgimiento 
              gracias a estrellas como Giannis Antetokounmpo, quien ha 
              llevado al equipo a la cima de la Conferencia Este. Aunque 
              no han ganado un campeonato desde 1971, los Bucks continúan 
              siendo un contendiente en la liga.</p>
          </div>
        </section>

        <section className='equipo7'>
          <img src={img7} alt='' />
          <div>
            <h3>Houston Rockets</h3>
            <p>Los Houston Rockets han sido una fuerza en la NBA desde 
              su fundación en 1967. Con dos campeonatos de la NBA en su 
              haber, los Rockets son conocidos por su enfoque en el juego
              de ritmo rápido y lanzamientos de tres puntos. Han contado 
              con jugadores estelares como Hakeem Olajuwon, Tracy McGrady 
              y James Harden.</p>
          </div>
        </section>

        <section className='equipo9'>
          <img src={img9} alt='' />
          <div>
            <h3>Charlotte Hornets</h3>
            <p>Los Charlotte Hornets fueron fundados en 1988 
              como una expansión de la NBA y rápidamente se convirtieron 
              en un equipo popular en la década de 1990. Aunque han 
              pasado por períodos de reconstrucción, los Hornets 
              mantienen una base de seguidores leales en Carolina 
              del Norte.</p>
          </div>
        </section>

        <section className='equipo8'>
          <img src={img8} alt='' />
          <div>
            <h3>Cleveland Cavaliers</h3>
            <p>Los Cleveland Cavaliers han tenido altibajos a lo largo 
              de su historia, pero alcanzaron la cima de la NBA en 2016 
              cuando LeBron James llevó al equipo a su primer campeonato. 
              Aunque LeBron ha dejado el equipo en múltiples ocasiones, 
              los Cavaliers continúan siendo un pilar en la Conferencia 
              Este.</p>
          </div>
        </section>

        <section className='equipo10'>
          <img src={img10} alt='' />
          <div>
            <h3>Atlanta Hawks</h3>
            <p>Fundados en 1946 como los Buffalo Bisons, los Atlanta 
              Hawks son una franquicia con una larga historia en la NBA. 
              Aunque no han ganado un campeonato desde su mudanza a 
              Atlanta en 1968, los Hawks han tenido temporadas 
              competitivas y han producido talento notable a lo largo de 
              los años.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
