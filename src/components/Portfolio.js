import React from 'react'

const Portfolio = (props) => {

    const artworks = props.assets.map(artwork => {
        const image = {
            backgroundImage: "url(" + artwork.fields.image.fields.file.url + ")"
        }
        console.log(artwork.fields.image.fields.file.url)
        return(
            <div className='artwork'>
                <img src={artwork.fields.image.fields.file.url} ></img>
                <h3>{artwork.fields.title}</h3>
                <p>{artwork.fields.description}</p>
            </div>
        )
    })

    return(
        <div className='portfolio'>
            {artworks}
        </div>
    )
}

export default Portfolio