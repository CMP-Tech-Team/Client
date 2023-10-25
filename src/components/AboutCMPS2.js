import React, {useState} from 'react';
import "../Styles/AboutCMPS2.css"
import A1 from "../Imgs/A1.jpg";
import A2 from "../Imgs/A2.jpg";
import A3 from "../Imgs/A3.jpg";
import A4 from "../Imgs/A4.jpg";
import A5 from "../Imgs/A5.jpg";


const AboutCMPS2 = () =>{
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const[bar1, setBar1] = useState(true);
    const[bar2, setBar2] = useState(true);
    const[bar3, setBar3] = useState(true);
    const[bar4, setBar4] = useState(true);
    const[bar5, setBar5] = useState(true);

    return(
        <>
            <div className = "third-section">
                <ul className = "unordered-list">
                    <li className = "sections">
                        <a className = "btn-cmps" onClick={() => {setOpen1(!open1); setBar1(!bar1);}}>
                            <div className = "plus">
                                <span className = {bar1 ? "bar-1":"bar-invis"}></span>
                                <span className = "bar-2"></span>
                            </div>
                            <p className ="in">Matemáticas</p>
                        </a>
                    </li>
                    {open1 && 
                    <div className ="in-line-pic">
                        <p className = "dropdown">Los niños construyen una sólida base en Matemáticas mediante el uso de diversos materiales prácticos que les ayudan a comprender conceptos matemáticos abstractos. Aprenden a contar, reconocer números, secuenciarlos, resolver problemas y experimentar con las 4 principales operaciones: suma, resta, multiplicación y división. A lo largo del programa, los estudiantes memorizarán muchos datos numéricos, contarán hasta miles, resolverán ecuaciones de 4 dígitos y desarrollarán una comprensión sólida de los números.  </p>
                        <img className= "A-series" src = {A1} alt=""/>
                    </div>
                    }
                    <li className = "sections">
                        <a className = "btn-cmps" onClick={() => {setOpen2(!open2); setBar2(!bar2)}}>
                            <div className = "plus" >
                                <span className = {bar2 ? "bar-3":"bar-invis"}></span>
                                <span className = "bar-2"></span>
                            </div>
                        <p className ="in">Lenguaje</p>
                        </a>
                    </li>
                        {open2 && 
                        <div className ="in-line-pic">
                            <p className = "dropdown">Los niños ampliarán y enriquecerán su vocabulario y habilidades auditivas a través de las lecciones de Lenguaje Montessori. También adquirirán una comprensión profunda de los sonidos fonéticos, lo que les permitirá disfrutar de la palabra escrita. Estar inmersos en un currículo basado en el lenguaje brindará al niño la confianza y la capacidad para componer sus propias historias, comprender la gramática y las funciones del lenguaje, y leer con confianza para el disfrute. </p>
                            <img className= "A-series" src = {A2} alt=""/>
                        </div>
                        }
                    <li className = "sections">
                        <a className = "btn-cmps" onClick={() => {setOpen3(!open3); setBar3(!bar3)}}>
                            <div className = "plus">
                                <span className = {bar3 ? "bar-4":"bar-invis"}></span>
                                <span className = "bar-2"></span>
                            </div>
                            <p className ="in" >Sensorial</p>
                        </a>
                    </li>
                    {open3 && 
                    <div className ="in-line-pic">
                        <p className = "dropdown" >Los niños aprenden a discriminar y comprender los conceptos de tamaño, forma, color, sabor y sonido a través de lecciones Sensoriales, como clasificación, emparejamiento de colores y patrones. Todos los materiales están especialmente diseñados para que los niños puedan clasificar información, desarrollar sus habilidades de resolución de problemas y pensamiento lógico, afinar sus sentidos y aumentar la conciencia del entorno que les rodea.  </p>
                        <img className= "A-series" src = {A3} alt=""/>
                    </div>
                    }
                    <li className = "sections">
                        <a className = "btn-cmps" onClick={() => {setOpen4(!open4); setBar4(!bar4)}}>
                            <div className = "plus">
                                <span className = {bar4 ? "bar-5":"bar-invis"}></span>
                                <span className = "bar-2"></span>
                            </div>
                            <p className ="in" >Vida Práctica</p>
                        </a>
                    </li>
                    {open4 && 
                    <div className ="in-line-pic">
                        <p className = "dropdown">Los ejercicios de Vida Práctica sientan las bases para que el niño desarrolle hábitos de trabajo y ética, y le permiten comenzar a establecer su papel como estudiante y ciudadano global. El currículo incluye habilidades de la vida cotidiana, como movimientos básicos como verter, doblar y llevar. Se hace hincapié en el desarrollo de la independencia, la autorregulación, el respeto y la perseverancia en cada niño; elementos clave de la filosofía Montessori.</p>
                        <img className= "A-series" src = {A4} alt=""/>
                    </div>
                    }
                    <li className = "sections">
                        <a className = "btn-cmps" onClick={() => {setOpen5(!open5); setBar5(!bar5)}}>
                            <div className = "plus">
                                <span className = {bar5 ? "bar-6":"bar-invis"}></span>
                                <span className = "bar-2"></span>
                            </div>
                            <p className ="in">Cultura</p>  
                        </a>
                    </li>
                    {open5 && 
                    <div className ="in-line-pic">
                        <p className = "dropdown">El currículo de Cultura integra materias tradicionales como geografía, historia, biología, zoología, botánica y ciencia. Esta área del currículo brinda al niño una comprensión del mundo que le rodea, su lugar en él y desarrolla su capacidad de pensar a nivel global. El trabajo en el currículo de cultura ayuda a los estudiantes a diferenciar entre hechos y ficción, hacer preguntas y mantener una curiosidad por el mundo.  </p>
                        <img className= "A-series" src = {A5} alt=""/>
                    </div>
                  }
                    

                </ul>
            </div>
        </>
    );
}

export default AboutCMPS2;