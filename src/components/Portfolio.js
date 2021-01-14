import React from 'react'

const Portfolio = (props) => {

    const artworks = props.assets.map(artwork => {

        return(
            <div className='artwork' onClick={() => handleClick(artwork)}>
                <img src={artwork.fields.image.fields.file.url} ></img>
            </div>
        )
    })

    const handleClick = (artwork) => {
        props.setSelectedArt(artwork)
        props.history.push('/artwork/' + artwork.fields.title)
    }

    return(
        <div className='portfolio'>
            {artworks}
        </div>
    )
}

export default Portfolio