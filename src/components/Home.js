import React from 'react'

const Home = (props) => {

    // const poster = props.assets.poster.fields.file.url
    // const video = props.assets.video.fields.file.url
    console.log(props.profile)

    return(
        <div className='home'>
            <div className='home-container'>
                <div className='video-container'>
                    <video  width="200" autoPlay loop muted poster={props.assets.poster ? props.assets.poster.fields.file.url : ''}>
                        <source src={props.assets.video ? props.assets.video.fields.file.url : ''} type='video/mp4' />
                    </video>
                </div>
                <div className='cover'>
                    <h1>{props.profile.displayName}</h1>
                </div>
            </div>
        </div>
    )
}

export default Home