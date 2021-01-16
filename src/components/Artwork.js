import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const Artwork = (props) => {
    

    return(
        <div className='single-artwork'>
            <div>
                <FontAwesomeIcon icon={faTimesCircle} onClick={props.handleClick} />
                <img src={props?.selectedArt?.fields?.image.fields.file.url} ></img>
                <h1>{props?.selectedArt?.fields?.title}</h1>
                <p>{props?.selectedArt?.fields?.year}</p>
                <p>{props?.selectedArt?.fields?.description}</p>
                <p>{props.selectedArt.fields?.materials}</p>
            </div>
        </div>
    )
}

export default Artwork