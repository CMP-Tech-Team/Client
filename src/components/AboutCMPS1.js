import {Diamonds, AddSubtract, BookOpen, Flask, Bookmark, School} from '@icon-park/react'
import "../Styles/AboutCMPS1.css";
import React, {useState} from "react";
import AboutCMPS3 from '../components/AboutCMPS3';
import IMG_0060 from '../Imgs/IMG_0060.jpg'
import IMG_0068 from '../Imgs/IMG_0068.jpg'
import IMG_0069 from '../Imgs/IMG_0069.jpg'
import IMG_0070 from '../Imgs/IMG_0070.jpg'

const AboutCMPS1 = () => {


    const imagesC =[
        IMG_0060,
        IMG_0068,
        IMG_0069,
        IMG_0070
    ]

    const [showAboutCMPS3, setShowAboutCMPS3] = useState(false);

    const [para1, setPara1] = useState("El Método Montessori es un enfoque individualizado de aprendizaje desarrollado por la Dra. Maria Montessori que permite al niño desarrollarse y aprender a su propio ritmo a través de materiales científicamente desarrollados y lecciones guiadas uno a uno por el maestro. El Método Montessori fomenta el aprendizaje independiente a través de la creatividad, la exploración y la investigación.");
    const [para2, setPara2] = useState("Utilizamos la reconocida metodología Montessori y materiales Montessori especializados para brindar a su hijo una educación única. Aquí, su hijo descubrirá un mundo de aprendizaje personalizado, independencia, creatividad y una sólida base para un futuro brillante. Fomentamos la autonomía, el pensamiento crítico y el amor por el conocimiento desde el principio. Su elección de hoy, sera el éxito de su hijo mañana.");
    const [para3, setPara3] = useState("");
    const [para4, setPara4] = useState("");
    const [title, setTitle] = useState("Metodologia Montessori");

    const setMeto = () =>{
        setTitle("Metodologia Montessori");
        setPara1("El Método Montessori es un enfoque individualizado de aprendizaje desarrollado por la Dra. Maria Montessori que permite al niño desarrollarse y aprender a su propio ritmo a través de materiales científicamente desarrollados y lecciones guiadas uno a uno por el maestro. El Método Montessori fomenta el aprendizaje independiente a través de la creatividad, la exploración y la investigación.");
        setPara2("Utilizamos la reconocida metodología Montessori y materiales Montessori especializados para brindar a su hijo una educación única. Aquí, su hijo descubrirá un mundo de aprendizaje personalizado, independencia, creatividad y una sólida base para un futuro brillante. Fomentamos la autonomía, el pensamiento crítico y el amor por el conocimiento desde el principio. Su elección de hoy, sera el éxito de su hijo mañana.");
        setPara3("");
        setPara4("");
        setShowAboutCMPS3(false);
    }

    const setMate = () =>{
        setTitle("Matemáticas Metodo Singapur");
        setPara1("También estamos certificados en la prestigiosa metodología de enseñanza de matemáticas de Singapur. Esto significa que su hijo recibirá una educación matemática de clase mundial que fomenta la comprensión profunda y la resolución de problemas. Combinamos lo mejor de Montessori y Singapur para preparar a su hijo para un futuro lleno de logros en matemáticas y más allá.");
        setPara2("");
        setPara3("");
        setPara4("");
        setShowAboutCMPS3(false);
    }
    const setIng = () =>{
        setTitle("Ingles Intensivo con Profesoras Extranjeras");
        setPara1("En Canadian Montessori Pre-School, la enseñanza del inglés es una prioridad. Contamos con profesoras extranjeras que brindan a los niños una experiencia inmersiva en este idioma global. ");
        setPara2("Nuestro enfoque intensivo en la enseñanza del inglés asegura que su hijo adquiera fluidez y confianza desde una edad temprana. Preparamos a los estudiantes para un futuro lleno de oportunidades en un mundo cada vez más globalizado.”");
        setPara3("");
        setPara4("");
        setShowAboutCMPS3(false);
    }
    const setSteam = () =>{
        setTitle("STEAM Education");
        setPara1("Opte por nosotros porque en Canadian Montessori Pre-School, llevamos la educación STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas) al corazón de nuestro plan de estudios. Fomentamos la curiosidad, la creatividad y el pensamiento crítico al explorar de manera práctica y divertida conceptos STEAM. Preparamos a los niños para un futuro lleno de innovación y descubrimientos, brindándoles las herramientas y habilidades necesarias para enfrentar los desafíos del siglo XXI.");
        setPara2("");
        setPara3("");
        setPara4("");
        setShowAboutCMPS3(false);
    }
    const setInsta = () =>{
        setTitle("Instalaciones Modernas y Seguras");
        setPara1("Instalaciones modernas: Nuestras instalaciones son un testimonio de belleza y modernidad, diseñadas para inspirar y fomentar el aprendizaje de su hijo. Nuestras aulas están inundadas de luz natural, creando un entorno propicio para el crecimiento y la exploración.");
        setPara2("Protocolos de seguridad impecables: Mantenemos los más altos estándares de seguridad con protocolos certificados para garantizar un ambiente protector y tranquilo.");
        setPara3("Espacios al aire libre excepcionales: Dos parques al aire libre proporcionan áreas expansivas para que los niños jueguen y se desarrollen en un entorno saludable.");
        setShowAboutCMPS3(true);
        setPara4("Vigilancia total: Contamos con un sistema de 16 cámaras de seguridad que cubren cada rincón, sin puntos ciegos, brindando tranquilidad y protección constante.");
    }
    const setPers = () =>{
        setTitle("Personal Personal Altamente Cualificado");
        setPara1("Contamos con guías altamente capacitadas y certificadas en la metodología Montessori. Nuestro equipo docente está dedicado a brindar una educación de calidad excepcional y personalizada a su hijo. Valoramos la excelencia en la enseñanza y nos aseguramos de que cada niño reciba la atención y el apoyo necesarios para alcanzar su máximo potencial.");
        setPara2("");
        setPara3("");
        setPara4("");
        setShowAboutCMPS3(false);
    }

return(
    <>
        <div className = "CMPS-Info">
            <div className = "CMPS-Tags">
                <ul className = "unordered-cmps">
                    <li onClick={setMeto}>
                        <Diamonds className = 'picture2' theme="multi-color" size="68" fill={['#299ab8' ,'#2fbeff' ,'#299ab8' ,'#dbdb42']}/>
                        <p className = "inpTag">Metodologia Montessori </p> 
                    </li>
                    <li onClick={setMate}>
                        <AddSubtract  className = 'picture2' theme="multi-color" size="68" fill={['#186587' ,'#2fbeff' ,'#299ab8' ,'#dbdb42']}/>
                        <p className = "inpTag">Matemáticas Metodo Singapur</p>
                    </li>
                    <li onClick={setIng}>
                        <BookOpen className = 'picture2' theme="multi-color" size="68" fill={['#751213' ,'#ff2629' ,'#7c7c7c' ,'#dbdb42']}/>
                        <p className = "inpTag">Ingles Intensivo con Profesoras Extranjeras</p>
                    </li>
                    <li onClick={setSteam}>
                        <Flask  className = 'picture2' theme="multi-color" size="68" fill={['#03700d' ,'#05af14' ,'#7c7c7c' ,'#dbdb42']}/>
                        <p className = "inpTag">STEAM Education</p>
                    </li>
                    <li onClick={setPers}>
                        <Bookmark  className = 'picture2' theme="multi-color" size="68" fill={['#8c968c' ,'#d0ddd0' ,'#8c968c' ,'#ff2629']}/>
                        <p className = "inpTag">Personal Altamente Cualificado </p>
                    </li>
            
                    <li onClick={setInsta}>
                        <School  className = 'picture2' theme="multi-color" size="68" fill={['#b38300' ,'#ffbb00' ,'#b38300' ,'#ff5047']}/>
                        <p className = "inpTag">Instalaciones Modernas y Seguras</p>
                    </li>
                </ul>
            </div>
            <div className ="CMPS-information">
                <div className = "CMPS-information-title">
                    <h1>{title}</h1>
                </div>
                <div className = "CMPS-prop-info">
                    <p className = "meto-p1">{para1}</p>
                    <p className = "meto-p1">{para2}</p>
                    <p className = "meto-p1">{para3}</p>
                    <p className = "meto-p1">{para4}</p>
                    {showAboutCMPS3 && 
                        <AboutCMPS3 imagesC={imagesC}/>
                    }
  
                </div>
            </div>
        </div>
    </>
);
}


export default AboutCMPS1;