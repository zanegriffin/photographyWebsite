import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faCode} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <div className='footer'>
            <a href='https://zanegriffin.netlify.app/' target='_blank'><FontAwesomeIcon icon={faCode} /></a>
            <a href='https://www.linkedin.com/in/zane-griffin/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://twitter.com/ZaneBGriffin' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
    )
}

export default Footer