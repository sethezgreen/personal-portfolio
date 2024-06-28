import React from 'react'
import './About.css'

const About = () => {
    return (
        <section className='about--section' id='about'>
        <div className="hero--section--content--box about--section--box">
            <div className="section--content">
                <p className="section--title">More</p>
                <h1 className="section--heading">About Me</h1>
                <p className="section-description">
                I am a Full Stack Developer who is eager to improve and always looking for new ways to learn. I studied Biochemistry during undergrad and decided to pursue tech upon graduating. Tech has always been a big part of my personal life, and I am very excited about starting a career in the industry. 
                </p>
                <p className="section-description">
                I recently finished three full stacks at Coding Dojo; Python, Java, and MERN. Coding has pushed my creativity, problem-solving, and ability to think outside the box. I am currently focused on building more projects and polishing my skills.
                </p>
            </div>
        </div>
        </section>
    )
}

export default About