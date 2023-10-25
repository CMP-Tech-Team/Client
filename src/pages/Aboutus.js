//import "../Styles/Homepage.css";
import "../Styles/Aboutus.css";
import AboutCMPS1 from "../components/AboutCMPS1";
import AboutCMPS2 from "../components/AboutCMPS2";

const Aboutus = () => {
    return (
        <>
        <div className = "row">
          <div className="column" >
            <div className = "slogan">
              <h1 className = "MOTIVAR">
                Motivar.
              </h1>
              <h1 className = "EDUCAR">
                Educar.
              </h1>
              <h1 className = "FORTALECER">
                Fortalecer.
              </h1>
            </div>
          </div>
          <div className="column" >
            <div className = "firstP">
             <p>En Canadian Montessori Pre-School nuestro objetivo es inspirar, educar y capacitar a la próxima generación de ciudadanos globales.</p>
            </div>
            <div className = "firstP">
             <p>Ofrecemos un entorno de aprendizaje impecable, centrado en el niño, donde cada niño puede alcanzar su máximo potencial.</p>
            </div>
            <div className = "firstP-1">
             <p>Fomentamos el deseo natural de aprender del niño, inspiramos su creatividad y cultivamos en ellos valores como la cooperación, la compasión, el respeto, la responsabilidad y al mismo tiempo que establecemos un amor duradero por el aprendizaje a lo largo de toda la vida.</p>
            </div>
          </div>
          <div className="column" >
            <h1 className = "title-2"> ¿Por qué elegir Canadian Montessori Pre-School? </h1>
          </div>
          <div className = "column">
            <AboutCMPS1/>
          </div>
          <div className = "column">
            <h1 className = "title-2">Plan de Estudios Organizado</h1>
            <p className = "secP-1">Las cinco áreas principales del currículo Montessori incluyen Matemáticas, Lenguaje, Vida Práctica, Sensorial y Cultura. Todas las lecciones se presentan de manera individualizada a los niños cuando están listos y adaptadas a su nivel de habilidad.</p>
          </div>
          <div className="column">
            <AboutCMPS2/>
          </div>
          <div className ="column">
            <h1 className = "title-2">Aulas con Diferentes Edades</h1>
            <p className = "secP-1">Las aulas Montessori reúnen a niños en grupos multi-edades, en lugar de clases compuestas por un solo nivel de grado. Hacerlo promueve habilidades de liderazgo y valores como la compasión, la responsabilidad, la empatía y la colaboración entre los miembros mayores del grupo, mientras que los estudiantes más jóvenes desarrollan hábitos de trabajo ordenados y ética gracias a sus compañeros mayores.</p>
            <p className = "secP-1">Las aulas Montessori reúnen a niños en grupos multi-edades, en lugar de clases compuestas por un solo nivel de grado. Hacerlo promueve habilidades de liderazgo y valores como la compasión, la responsabilidad, la empatía y la colaboración entre los miembros mayores del grupo, mientras que los estudiantes más jóvenes desarrollan hábitos de trabajo ordenados y ética gracias a sus compañeros mayores.</p>
          </div>
          <div className="column">
          <h1 className = "title-2">Entorno con Propósito</h1>
            <p className = "secP-1">Un aula Montessori es un entorno especial diseñado con los intereses y necesidades del niño en primer plano. Los materiales presentes en las aulas están basados en aspectos académicos y tienen un propósito concreto y habilidades que se desarrollan a través de su exploración.
                                    Las aulas son ordenadas y organizadas, un elemento clave para el aprendizaje exitoso y el desarrollo de hábitos de trabajo y ética en el niño.</p>
            <p className = "secP-1">Los materiales disponibles en cada aula están diseñados para el aprendizaje y desarrollo de cada grupo de edad específico. Los niños pequeños suelen tener muchos materiales de Vida Práctica para elegir, así como la introducción de materiales Sensoriales multi-sensoriales y materiales de lenguaje para desarrollar su vocabulario. Las aulas de Casa tendrán lecciones más avanzadas preparadas para desafiar y despertar el interés del niño en todas las áreas de aprendizaje.</p>
          </div>
          <div className ="column">
            <h1 className = "title-2">Aprendizaje Motivado</h1>
            <p className = "secP-1">El método Montessori cree que los niños nacen naturalmente con una directriz interna para satisfacer sus propias necesidades y aprender.</p>
            <p className = "secP-1">Nuestro objetivo como educadores Montessori es abrazar esta impulsión innata proporcionando entornos de aprendizaje óptimos para nuestros estudiantes brillantes, comprometidos y curiosos. Independientemente de la etapa de desarrollo, la oportunidad de elegir su propia actividad, moverse y trabajar libremente dentro del entorno y trabajar durante largos períodos sin interrupciones son elementos fundamentales del aprendizaje en el aula Montessori.</p>
          </div>
        </div>
        </>
    )
}

export default Aboutus