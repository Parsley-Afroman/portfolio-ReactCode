import CardOne from './WordNerd.png'
import CardTwo from './DragonJobs.png'
import CardThree from './DinoFinder.png'
import {FaGithub, FaLinkedin} from "react-icons/fa";

function Cards (){

    return (
        <>
        <div className='cardShow' >
                <img src={CardOne} className='cardImage' />
                <div className='briefDescription Hide'>
                    <p className='cardHeader headerThree'>
                        Word Nerd
                    </p>
                    <ul  className='techStack'>
                        <li>JS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                        <p>
                            Following a mobile-first approach to recreate 'Wordle', we fetched
                            JSON word data , which I helped to sequentially generate a novel word. <br/>
                            Validated and sanitised inputs protect the site from malicious users, before the data
                            is parsed to logic for changing each corresponding key colour, by manipulating
                            the DOM via data attributes.
                        </p>
                    <div className='cardLinks'>
                        <a href='https://github.com/iO-Academy/2022-dragons-wordle' target='_blank' className='cardLink'><FaGithub /></a>
                        <a href='https://dev.io-academy.uk/projects/2022-jan/wordnerd/' target='_blank'>
                            <p className='liveLink headerThree'>Live</p>
                        </a>
                    </div>
                    <div className='devTools'>
                        <ul></ul>
                    </div>
                </div>
        </div>
            <div className='cardShow'>
                <img src={CardTwo} className='cardImage'/>
                <div className='briefDescription Hide'>
                    <p className='cardHeader headerThree'>
                        Job Searcher
                    </p>
                    <ul  className='techStack'>
                        <li>JS React</li>
                        <li>SASS</li>
                        <li>HTML</li>
                    </ul>
                    <p>
                        Our component tree guided our decision to fetch the API at the top of the structure, enabling us
                        to use props, so that we could use object destructuring to output job details on our
                        SASS styled front-end.<br/>
                        I helped create the modal and table templates the data populates; with us achieving the ability
                        to search multiple entities, and display the details of a single entity.
                    </p>
                    <div className='cardLinks'>
                        <a href='https://github.com/iO-Academy/2022-dragons-jobSearch' target='_blank' className='cardLink'><FaGithub /></a>
                        <a href='https://2022-jan-dragonsjobsearch.dev.io-academy.uk/' target='_blank'>
                            <p className='liveLink headerThree'>Live</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='cardShow'>
                <img src={CardThree} className='cardImage'/>
                <div className='briefDescription Hide'>
                    <p className='cardHeader headerThree'>
                        Dino Finder
                    </p>
                    <ul  className='techStack'>
                        <li>OOP PHP</li>
                        <li>SASS</li>
                        <li>MySQL</li>
                    </ul>
                    <p>
                        Designed desktop first, and using a Hydrator entity, and Viewhelper, design pattern we created
                        a unit testable application for displaying a dinosaur collection.<br/>
                        I helped code the collection navigation button functionality and the unit test for it, as well
                        as contributing to the hi-fidelity wireframe which guided the design and asset collection.
                    </p>
                    <div className='cardLinks'>
                        <a href='https://github.com/iO-Academy/2022-jan-dragons-DinoFinder' target='_blank' className='cardLink'><FaGithub /></a>
                        <a href='https://dev.io-academy.uk/projects/2022-jan/dino-finder/index.php' target='_blank'>
                            <p className='liveLink headerThree'>Live</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;