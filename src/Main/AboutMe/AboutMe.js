import Profile from './MeCutOut.png'
import {FaGithub, FaLinkedin} from "react-icons/fa"

function AboutMe () {
    return (
        <section className='profile'>
            <div className="profileImageContainer">
            <img src={Profile} alt="profile picture" className='profilePic'/>
            </div>
            <div className='introContainer'>
                <div className='aboutMe'>
                    <p className='headerThree'>About Me</p>
                    <div className='aboutTextBox'>
                        <p className='aboutMeText'>
                            Hello my name is Sami, <br/>
                            I am a Bristol based Full Stack Developer.<br/>
                            I've always enjoyed a good challenge and coding is the most enjoyable yet.

                        </p>
                    </div>
                </div>
                <div className='socialsLinks'>
                    <a href='https://www.linkedin.com/in/samuel-shanagher/' target='_blank'><FaLinkedin /></a>
                    <a href='https://github.com/Parsley-Afroman' target='_blank'><FaGithub /></a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;