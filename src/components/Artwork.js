import React from 'react'

const Artwork = (props) => {
    return(
        <div className='artwork'>
            <img src={props.selectedArt.fields.image.fields.file.url} ></img>
            <h1>{props.selectedArt.fields.title}</h1>
            <p>{props.selectedArt.fields.description}</p>
        </div>
    )
}

export default Artwork