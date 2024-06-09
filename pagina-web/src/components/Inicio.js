import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from "../img/SlideBar1.jpg";
import imagen2 from "../img/SlideBar2.jpg";
import imagen3 from "../img/SlideBar3.jpg";
import imagen4 from "../img/SliderBar4.jpg";

export const Inicio = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }


  const imagenes = [imagen1, imagen2, imagen3, imagen4];

  return (
    <div className="fondo">
      <div className="slider">
      <Slider {...settings}>
        {imagenes.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
          </div>
        ))}
      </Slider>
      </div>

      <div className="content-inicio">

        <h2 className="title">Datos Interesantes</h2>

        <section className="seccion1">
          <div className="img-seccion1"></div>
          <div className="info-seccion1">
            <h2>Árbitros con relojes</h2>
            <p>Los árbitros utilizaban relojes para controlar el tiempo de juego. 
              La norma de posesión de los 24 segundos se estableció en 1954 con el 
              objetivo de eliminar las tácticas de retención que empezaron a 
              desarrollar algunos equipos de la NBA.</p>
          </div>
        </section>

        <section className="seccion2">
          <div className="img-seccion2"></div>
          <div className="info-seccion2">
            <h2>Primeras Canastas</h2>
            <p> Las primeras canastas eran cestos de madera con la base 
              cerrada. Después de cada anotación, la pelota no caía al 
              suelo y el árbitro tenía que subir por una escalera para 
              recuperarla y seguir con el partido.</p>
          </div>
        </section>

        <section className="seccion3">
          <div className="img-seccion3"></div>
          <div className="info-seccion3">
            <h2>Mientras más mejor</h2>
            <p>El numero de jugadores por lado no estaba especificado. 
              Durante un tiempo, el número total de jugadores fue un 
              valor predeterminado de 18, nueve por lado, el mismo número
              que apareció en el primer juego.</p>
          </div>
        </section>

        <section className="seccion4">
          <div className="img-seccion4"></div>
          <div className="info-seccion4">
            <h2>El baloncesto se jugaba con una pelota diferente</h2>
            <p>Por extraño que parezca, el baloncesto se jugaba originalmente 
              con una pelota de fútbol y canastas de durazno.</p>
          </div>
        </section>
      </div> 

    </div>
  )
}

