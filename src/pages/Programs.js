
import "../Styles/Programs.css";
import x12 from "../Imgs/x12.jpg"

const Programs = () =>{
    return(
        <>
        <div className = "full-page">
          <div className ="page-left">
            <div className = "message-P">
              <h2>Mensaje de la Directora</h2>
            </div>
            <div className="paragraphs">
                <p className = "para-M">
                  Estimados Padres y Querida Comunidad Canadian Montessori,
                </p>
                <p className = "para-M">
                  Es con inmensa alegría y gratitud que les doy la bienvenida a nuestro Canadian Montessori. Como Directora, es un verdadero honor formar parte de este extraordinario viaje en el mundo de la educación.
                </p>
                <p className = "para-M">
                Con más de 15 años de experiencia como maestra Montessori en Canadá, he sido testigo del poder transformador de esta filosofía Montessori. El enfoque Montessori, con su énfasis en el respeto por el niño y su capacidad innata de aprender, ha sido mi pasión y guía a lo largo de mi carrera.
                </p>
                <p className = "para-M">
                  En nuestro Pre-School, compartiremos juntos la maravillosa experiencia de ver a los niños crecer, aprender y descubrir el mundo que les rodea. Nuestra misión es nutrir no solo sus mentes, sino también sus corazones, cultivando la curiosidad, la independencia y el amor por el aprendizaje.
                </p>
                <p className = "para-M">
                Confío que cada año sera lleno de logros y descubrimientos para cada niño que forma parte de nuestra comunidad. Estamos aquí para apoyar, inspirar y guiar a sus hijos en su viaje de desarrollo y crecimiento.
                </p>
                <p className = "para-M">
                Les invito a unirse a nosotros en esta emocionante travesía educativa, donde juntos construiremos un futuro brillante para cada niño que pasa por nuestras puertas.
                </p>
                <p className = "para-M">
                  Con gratitud y entusiasmo,
                </p>
                <p className = "sign-off">
                  Ximena Diaz Gamboa
                </p>
              </div>
            </div>
            <div className ="page-right">
              <img className = "portrait" src ={x12}/>
              <p className="para-Name">
                Ximena Diaz Gamboa 
              </p>
              <p className = "para-P">
                <b>15 Años de Experiencia</b> - Guía Montessori en Toronto, Canadá
              </p>
              <p className = "para-P">
                <b>Guía Montessori</b> - North American Montessori Center de Vancouver
              </p>
              <p className = "para-P">
                <b>Maestria en Pedagogia Montessori </b> - Universidad de Barcelona 
              </p>
            </div>
          </div>
        </>
    )
}

export default Programs