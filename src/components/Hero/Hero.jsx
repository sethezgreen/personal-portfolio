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
                    <button
                        onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vQkTGCD4vFyWcBvWhBiig9-AKgMknzKnEy1P3ZeXA4cjxbxI5nbzhat_0vu7FJoP9QCwYgOKi2CJyPT/pub')}
                        className="resume-btn"
                    >
                        Resume
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home