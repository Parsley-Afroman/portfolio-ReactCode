import Cards from "./Cards/Cards";
import UpArrow from "../../Navbar/UpArrow/UpArrow";
import React from "react";

function Projects () {
    return (
        <section className='projects'>
            <p className='headerThree'>
                PROJECTS
            </p>
            <div className='cardWrapper'>
                <Cards />
            </div>
        </section>
    )
}

export default Projects;