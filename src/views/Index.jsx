import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

const Index = () => {
    return (
        <div className='content-container'>
            <Hero />
            <About />
            <Projects />
            {/* <Contact /> */}
        </div>
    )
}

export default Index