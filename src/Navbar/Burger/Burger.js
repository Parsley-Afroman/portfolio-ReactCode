import BurgerLines from './BurgerLines.svg'
import {FaBaby, FaCat, FaCube, FaDragon, FaFingerprint} from "react-icons/fa";


function Burger ({burgerView, setBurgerView}){
    // console.log(burgerView)
    const clickHandle = () => {
            !burgerView ? setBurgerView(true) : setBurgerView(false)
            console.log(burgerView)
    }


    return (
        <div className={!burgerView ? 'Hide' : 'burgerButton'} onClick={clickHandle}>
        {/*<img src={BurgerLines} alt='Burger Lines' className='burgerSvg'/>*/}
            <FaCube />
        </div>
    )
}

export default Burger;