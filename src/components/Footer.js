import '../Styles/Footer.css';
import Contactstuff from './Contactstuff';

const Footer = () => {

    return(
        <>
            <div className = 'footer-main'>
            <div className = "top">
                <div className = 'pages'>
                    <ul className = 'list-unstyled'>
                        <h3 className="sub-heading">Company</h3>
                        <li> phone number</li>
                        <li> country</li>
                        <li> address</li>
                    </ul>
                    <ul className = 'list-unstyled'>
                        <h3 className="sub-heading">Socials</h3>
                        <li> facebook</li>
                        <li> linkedin</li>
                        <li> instagram</li>
                    </ul>
                </div>
                <div className = 'contact'>
                    <Contactstuff/>
                </div>
                </div>
              
            </div>
        </>
    )

}

export default Footer