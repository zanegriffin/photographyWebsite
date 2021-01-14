import React from 'react'
import ReactPlayer from 'react-player'

const Home = (props) => {

    // const poster = props.assets.poster.fields.file.url
    // const video = props.assets.video.fields.file.url
    console.log(props.profile)

    return(
        <div className='home'>
            <div className='home-container'>
                <div className='video-container'>
                    {/* <video autoPlay loop muted preload poster={props.assets.poster ? props.assets.poster.fields.file.url : ''}>
                        <source src={props.assets.video ? props.assets.video.fields.file.url : ''} type='video/mp4' />
                    </video> */}
                    <ReactPlayer url={props.assets.video ? props.assets.video.fields.file.url : ''} playing={true} loop={true} width='100%' height='100%'/>
                </div>
                <div className='cover'>
                    <h1>{props.profile.displayName}</h1>
                </div>
            </div>
        </div>
    )
}

export default Home