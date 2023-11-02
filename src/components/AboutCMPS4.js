import '../Styles/AboutCMPS4.css'

const AboutCMPS4 = ({imagesS}) =>{

    return(
        <>
        <div className="image-gallery">
            {imagesS.map((imagesS, index) => (
                <img key={index} src={imagesS} alt={`Image ${index}`} />
            ))}
        </div>
        </>

    );

};

export default AboutCMPS4;