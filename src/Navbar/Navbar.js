import React, {useState} from 'react'
import Burger from "./Burger/Burger";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

function Navbar () {

    const [burgerView, setBurgerView] = useState(true);

    //this enables the name header to reappear if the screen is increased without closing the Burger Menu
    React.useEffect(() => {
        function burgerViewTrigger () {
            const width = window.innerWidth
            if(width > 666){
                setBurgerView(true)
            }
        }
        window.addEventListener('resize', burgerViewTrigger)
    })

    return <nav className='navWrapper'>
        <div className={!burgerView ? 'Hide' : ''}><h3>Samuel Shanagher</h3></div>
        <ul className='navLinks'>
            <li><a href='#main'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#footer'>Contact</a></li>
        </ul>
        <div className='iconButtons'>
        <Burger burgerView={burgerView} setBurgerView={setBurgerView}/>
        <DropDownMenu burgerView={burgerView} setBurgerView={setBurgerView} />
        </div>
    </nav>
}

export default Navbar;