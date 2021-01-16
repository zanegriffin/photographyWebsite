import React, {useState} from 'react'
import Artwork from './Artwork'

const Portfolio = (props) => {
    const [active, setActive] = useState(false)
    const [artwork, setArtwork] = useState({})

    const artworks = props.assets.map(artwork => {

        return(
            <div className='artwork' onClick={() => handleClick(artwork)}>
                <img src={artwork.fields.image.fields.file.url} ></img>
            </div>
        )
    })

    const handleClick = (artwork) => {
        setActive(!active)
        setArtwork(artwork)
        console.log(active, artwork)
    }

    // const renderArtwork = () => {
    //     if(active && artwork){
    //         return <Artwork selectedArt={artwork}/>
    //     }
    // }

    return(
        <div className='portfolio'>
            {artworks}
            {active ? <Artwork selectedArt={artwork} handleClick={handleClick} /> : ''}
        </div>
    )
}

export default Portfolio