import React from 'react'

const About = (props) => {
   console.log(props)
   const skills = props.assets.skills.map(skill => {
       return(
            <>
            <li>{skill}</li>
            </>
       )
   })
    return(
        <div className='about'>
            <img src={props.assets.profileImage.fields.file.url} ></img>
            <h1>{props.assets.displayName}</h1>
            <ul>
                {skills}
            </ul>
            <p>{props.assets.aboutArtist}</p>
            <p>{props.assets.about}</p>
            <div>
                <a target="_blank" href={props.assets.links[0]}>Artist Instagram</a>
                <a target="_blank" href={props.assets.links[1]}>Artist Patreon</a>
            </div>
            
        </div>
    )
}

export default About