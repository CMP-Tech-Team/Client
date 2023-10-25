
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {useState} from 'react'
import { useRef } from 'react';
import "../Styles/Navbar.css";

const Navbar = () =>{
    const navRef = useRef();
    const [isActive, setIsActive] = useState(false);

    //show navbar
    const showNavbar = () =>{
        navRef.current.classList.toggle("active");
    }
    //hide navbar
    //const hideNavbar =()=>{
       // navRef.current.classList.remove("active")
    //}

    return(
        <header>
            <nav className = "nav" id="navBar">
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                        <span className = "bar"></span>
                        <span className = "bar"></span>
                        <span className = "bar"></span>
                </label>

                <label className = "logo"> Logo </label>
                <ul>
                    <CustomeLink className="CustomeLink" to = ""> Home </CustomeLink>
                    <CustomeLink className="CustomeLink" to = "Aboutus" > About CMPS </CustomeLink>
                    <CustomeLink className="CustomeLink" to = "Programs"> Message</CustomeLink>
                    <CustomeLink className="CustomeLink" to = "Gallary" > Gallary </CustomeLink>
                    <CustomeLink className="CustomeLink" to = "Contact" > Contact Us </CustomeLink>
                
                </ul>
            </nav>
        </header>
    )

}

const CustomeLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true })
    return(
        <li className = {isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;