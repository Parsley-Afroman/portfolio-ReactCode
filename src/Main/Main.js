import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import UpArrow from "../Navbar/UpArrow/UpArrow";

function Main () {
    return (
        <>
        <UpArrow />
        <main id='main'>
            <AboutMe />
            <div id='projects'>
                <Projects/>
            </div>
        </main>
        </>
    )
}

export default Main;