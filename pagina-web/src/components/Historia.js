import React from 'react'
import imagen1 from "../img/HistoriaComplemento2.png";
import imagen2 from "../img/HistorialComplemento3.png";
import imagen3 from "../img/HistoriaComplemento4.png";

export const Historia = () => {
  return (
    <div>
      <div className='historia1'>
        <h2>Historia del BasketBall</h2>
              
        </div>

      <div className='historia1-2'>
          <div className='historia1-2-datos'>
            <h3>Creador del BasketBall</h3>
            <p>El creador del basquetbol fue James Naismith que, 
              luego de graduarse en teología del Presbyterian Collage 
              en Montreal, se anotó para estudiar educación física en 
              el Springfield Collage con Luther Halsey Gulik "reconocido
               como el padre de la educación física". Durante un 
               curso de psicología del juego, Gulik planteó la necesidad 
               de crear una nueva disciplina capaz de desempeñarse en un 
               ambiente cerrado para practicar la durante la época 
               invernal cuando no podían jugar al fútbol. En respuesta, 
               Naismith se dedicó a idear un nuevo deporte que resultara 
               fácil de asimilar, pero lo suficientemente complejo para 
               que despertara interés.
               Naismith elaboró las trece reglas básicas que describían 
               el modo de juego, cómo mover el balón, la forma de puntuar
               y lo que se consideraba como falta. Reunió a los alumnos 
               para formar los equipos a los que se les designaron tres 
               centros, tres delanteros y tres guardas para cada grupo.</p>
            </div>
          <img src={imagen1} alt=''/>
      </div>

      <div className='historia2'> </div>

      <div className='historia2-2'>
          <div className='historia2-2-datos'>
            <h3>Origen del basquetbol</h3>
            <p>El 21 de diciembre de 1891, James Naismith publicó las 
              reglas para el nuevo juego de basquetbol y le pidió a su 
              clase que jugara un partido en una de las canchas del 
              Springfield Collage, con una pelota de futbol y dos 
              canastos de durazno. Alguien sugirió llamar a la nueva 
              disciplina “juego Naismith”, pero luego de presenciar el 
              juego vieron que se destacaba el balón y las canastas, por 
              lo que eligieron llamarlo “baloncesto”. En el resto del 
              mundo no tardó mucho más tiempo en hacerse conocido. 
              En 1983 se organizó el primer partido de basquetbol en 
              Montmartre, París, y luego se organizaron encuentros de 
              basquetbol en China, India y Japón</p>
            </div>
          <img src={imagen2} alt=''/>
      </div>

      <div className='historia3'></div>

      <div className='historia3-2'>
          <div className='historia3-2-datos'>
            <h3>Conocimiento a nivel mundial</h3>
            <p>A pesar de la rápida expansión del deporte en 
              diferentes países, durante las primeras décadas el
              basquetbol no tuvo una organización internacional que 
              lo regulara. Gracias a varias peticiones, en 1904 la 
              disciplina fue incluida como deporte olímpico de 
              demostración. Recién en 1932 se fundó la Federación 
              Internacional de Basquetbol "FIBA". Este organismo con 
              sede en Miles "Suiza", estaba dedicado a regular las 
              normas del deporte a nivel mundial y de celebrar de manera 
              periódica diferentes eventos y campeonatos. A través del 
              aporte de la FIBA, el basquetbol masculino se convirtió 
              en uno de los deportes olímpicos. Tuvo su primera aparición 
              en las olimpiadas de Berlín en 1936. En 1976 se incorporó 
              el basquetbol femenino como parte de las olimpiadas, que 
              tuvieron lugar en Montreal.</p>
            </div>
          <img src={imagen3} alt=''/>
      </div>

      <div className='historia4'></div>
      
    </div>
  )
}
