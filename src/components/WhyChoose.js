import {Diamonds, AddSubtract, BookOpen, Flask, Bookmark, School, Camera, Protect} from '@icon-park/react'
import "../Styles/WhyChoose.css";

const WhyChoose = () =>{
    return(
        <>
            <div className = "col1">
                <div className = 'container-box'>
                    <Diamonds className = 'picture' theme="multi-color" size="120" fill={['#299ab8' ,'#2fbeff' ,'#299ab8' ,'#dbdb42']}/>
                    <h4>
                        Metodologia Montessori
                    </h4>
                </div>
                <div className = 'container-box'>
                    <AddSubtract  className = 'picture' theme="multi-color" size="120" fill={['#186587' ,'#2fbeff' ,'#299ab8' ,'#dbdb42']}/>
                    <h4>
                        Matemáticas Metodo Singapur
                    </h4>
                </div>
                <div className = 'container-box'>
                    <BookOpen className = 'picture' theme="multi-color" size="120" fill={['#751213' ,'#ff2629' ,'#7c7c7c' ,'#dbdb42']}/>
                    <h4>
                        Ingles Intensivo con Profesoras Extranjeras
                    </h4>
                </div>
            </div>
            <div className = "col2">
                <div className = 'container-box'>
                    <Flask  className = 'picture' theme="multi-color" size="120" fill={['#03700d' ,'#05af14' ,'#7c7c7c' ,'#dbdb42']}/>
                    <h4>
                        STEAM Education
                    </h4>
                </div>
                <div className = 'container-box'>
                    <Bookmark  className = 'picture' theme="multi-color" size="120" fill={['#8c968c' ,'#d0ddd0' ,'#8c968c' ,'#ff2629']}/>
                    <h4>
                        Personal Personal Altamente Cualificado
                    </h4>
                </div>
                <div className = 'container-box' >
                    <School  className = 'picture' theme="multi-color" size="120" fill={['#b38300' ,'#ffbb00' ,'#b38300' ,'#ff5047']}/>
                    <h4>
                        Instalaciones Modernas y Seguras
                    </h4>
                </div>
             </div>
             <div className = "col3">
                <div className = 'container-box'>
                    <Camera  className = 'picture' theme="multi-color" size="120" fill={['#7c7c7c' ,'#acacac' ,'#7c7c7c' ,'#a8f6f6']}/>
                    <h4>
                        16 Cámaras sin Ángulos Ciegos 
                    </h4>
                </div>
                <div className = 'container-box'>
                    <Protect className = 'picture'  theme="multi-color" size="120" fill={['#7c7c7c' ,'#acacac' ,'#fff900' ,'#ffffff']}/>
                    <h4>
                        Protocolos de Seguridad Certificados 
                    </h4>
                </div>
            </div>

        </>
    )
}


export default WhyChoose;