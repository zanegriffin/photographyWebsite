import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [style, setStyle] = useState({'transform': 'translate(1000px, 0px)'})
    const [hidden, setHidden] = useState(false)
    
    
    const handleOnClick = () => {
        setHidden(!hidden)
        if(hidden){
            
            setStyle({'transform': 'translate(1000px, 0px)'})
        } else if(!hidden){
            
            setStyle({'transform': 'translate(0px, 0px)'})
        }
        console.log('click', hidden, style)
    }


    return(
        <div className='header'>
            <h1>Artist Portfolio</h1>
            <div className='nav-bar'>
                <div className='nav-icon' onClick={handleOnClick}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </div>
                <div className='links' style={style} >
                    <ul>
                        <Link to='/' style={{'textDecoration': 'none'}} onClick={handleOnClick}><li>Home</li></Link>
                        <Link to='/portfolio' style={{'textDecoration': 'none'}} onClick={handleOnClick}><li>Portfolio</li></Link>
                        <Link to='/about' style={{'textDecoration': 'none'}} onClick={handleOnClick}><li>About</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header