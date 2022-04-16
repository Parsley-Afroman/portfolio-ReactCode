import data from './projects.json'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {createElement, useEffect, useState} from "react";

function Cards (){

    function renderProjects (data) {
        let result = data.map(project => {
            return (
                <>
                    <div className='cardShow' >
                        <img src={project.image_link} className='cardImage'/>
                        <div className='briefDescription Hide'>
                            <p className='cardHeader headerThree'>
                                {project.project_name}
                            </p>
                            <ul  className='techStack'>
                                <li>{project.skill_one}</li>
                                <li>{project.skill_two}</li>
                                <li>{project.skill_three}</li>
                            </ul>
                            <p>
                                {project.about_project}
                            </p>
                            <div className='cardLinks'>
                                <a href={project.Git_Link} target='_blank' className='cardLink'><FaGithub /></a>
                                <a href={project.Live_Link} target='_blank'>
                                    <p className='liveLink headerThree'>Live</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
        return result
    }
    return (
        <>
            {renderProjects(data)}
        </>
    )
}

export default Cards;