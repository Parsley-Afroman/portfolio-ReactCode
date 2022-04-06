import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer (){
    return (
        <footer id='footer'>
            <div className='footerLinks'>
                <a href='https://www.linkedin.com/in/samuel-shanagher/' target='_blank'><FaLinkedin /></a>
                <p className='headerThree'>Sshan90@Hotmail.com</p>
                <a href='https://github.com/Parsley-Afroman' target='_blank' ><FaGithub /></a>
            </div>
            <div className='copyright'>
                <p>&#169; 2022          Designed By Parsley Afroman</p>
            </div>
        </footer>
    )
}

export default Footer;