import {FaRegWindowClose} from "react-icons/fa";

function DropDownMenu ({burgerView, setBurgerView}){
    function clickHandle () {
        setBurgerView(!burgerView)
    }
    return (
        <>
        <div className={!burgerView ? 'dropDownMenu' : 'Hide'} id='dropDown'>
            <div className='cross' onClick={clickHandle}>
                <FaRegWindowClose />
            </div>
            <div className='navList'>
                <ul>
                    <li><a href='#main'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#footer'>Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default DropDownMenu;