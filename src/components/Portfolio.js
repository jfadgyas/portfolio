import { Link } from "react-router-dom"

import Icon from '@mdi/react';
import { mdilLinkVariant } from '@mdi/light-js'

import Cards from "./Cards"

import '../style/portfolio.css'

const Portfolio = () => {

    const projects = [
        {
            title: 'hitelcentrum',
            link: 'https://hitelcentrum.netlify.app/',
            icon: <Icon className='portfolio__icon portfolio__icon--large' path={mdilLinkVariant}/>,
            shortDesc: "Comprehensive comparisons of loan options, interest rates, terms, and other key features from various banks.",
        },
        {
            title: 'Werktijd',
            link: 'https://werktijd.netlify.app/',
            icon: <Icon className='portfolio__icon portfolio__icon--large' path={mdilLinkVariant}/>,
            shortDesc: "Our platform is designed to help you easily and accurately track the hours you work, whether you're a freelancer, remote worker, or employee.",
        },
        {
            title: 'timetable',
            link: 'http://',
            icon: <Icon className='portfolio__icon portfolio__icon--large' path={mdilLinkVariant}/>,
            shortDesc: "The ultimate destination for train simulator enthusiasts. Timetable and line information, train schedule, crossings and interactions.",
        },
        // {
        //     title: 'Project 4',
        //     link: 'helloo',
        //     icon: <Icon className='portfolio__icon portfolio__icon--large' path={mdilLinkVariant} />,
        // },
    ]

    return (
        <section id='portfolio' className='portfolio'>
            <div className='portfolio__wrapper'>
                <h3 className='portfolio__title'>Discover My work</h3>
                <p className='portfolio__desc'>
                    Explore these examples, each representing a unique challenge and an opportunity for creative solutions. As a seasoned web developer, I take pride in delivering innovative and functional websites tailored to the specific needs of my clients.
                </p>
            </div>
            <Cards data={projects} cardType='portfolio' />
            <div className='portfolio__callout'>
                <p className='portfolio__summary'>
                    These projects represent just a fraction of my portfolio, each demonstrating my <span className='portfolio__strong'>commitment to</span> excellence and passion for pushing the boundaries of web development.
                    Take a look at how I turn ideas into <span className='portfolio__strong'>engaging digital experiences</span>, and let's discuss how I can bring your vision to life.
                </p>
                <Link
                    className='portfolio__action'
                    to='?service=site'
                    onClick={e => document.querySelector('#contact').scrollIntoView({behavior: 'smooth'})}
                    >Find out how!
                </Link>
            </div>
        </section>
    )
}

export default Portfolio