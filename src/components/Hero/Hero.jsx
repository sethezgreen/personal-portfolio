import React from 'react'
import './Hero.css'
import profile_picture from '../../assets/profile_picture.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
    return (
        <section className='hero--section' id='hero'>
            <div className='profile_picture_container'>
                <img src={profile_picture} alt="pfp" id='profile_picture'/>
            </div>
            <div className='section_text'>
                <p className='hero--heading'>Hello, I'm</p>
                <h1 id='title'>Seth Green</h1>
                <p className='hero--heading'>Full Stack Developer</p>
                <div className='socials_container'>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sethezgreen/">
                        <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/sethezgreen">
                        <FontAwesomeIcon icon={faGithub} className='icon'/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home