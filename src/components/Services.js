import { Link } from 'react-router-dom'

import Cards from './Cards'

import '../style/services.css'

const Services = () => {

    const services = [
        {
            title: 'Custom Website',
            link: '?service=site',
            shortDesc: 'Turning Ideas into Interactive Reality: Your Vision, My Code!',
            price: 'EUR 350.-',
            action: 'build!',
        },
        {
            title: 'testin',
            link: '?service=test',
            shortDesc: 'Customers will stop interacting if they encounter a bad user experience.',
            price: 'EUR 150.-',
            action: 'test!',
        },
        {
            title: 'Database',
            link: '?service=database',
            shortDesc: 'Structuring Your Information Highway: From Concept to Reality!',
            price: 'EUR 350.-',
            action: 'Create!',
        },
        {
            title: 'Data entry',
            link: '?service=dataentry',
            shortDesc: 'Precision in Every Keystroke: Transforming Data with Accuracy and Efficiency!',
            price: 'EUR 25.- / hour',
            action: 'Fill it!',
        },
        {
            title: 'documentation',
            link: '?service=documentation',
            shortDesc: 'Elevating Code Clarity: Where Precision Meets Explanation',
            price: 'EUR 25.- / hour',
            action: 'Clarify!',
        },
        // {
        //     title: 'animation',
        //     link: '?service=animation',
        //     // shortDesc: 'A static website is fine but with animation, it’s another level',
        //     shortDesc: 'Animating Your Digital Story: Bringing Websites to Life, Frame by Frame',
        //     price: 'EUR 22.-',
        //     action: 'Animate!',
        // },
        // {
        //     title: 'teaching', // courses, elearning
        //     link: '?service=teaching',
        //     shortDesc: 'Empowering Digital Dreamers: Unlock Your Potential with Our Web Development Courses',
        //     price: 'EUR 20.-',
        //     action: 'Enroll!',
        // },
    ]

    return (
        <section id='services' className='services'>
            <div className='services__wrapper'>
                <h3 className='services__title'>Services</h3>
                <p className='services__desc'>
                    I offer a comprehensive range of web development solutions tailored to meet your specific needs. As a seasoned web developer, I bring a wealth of expertise and a passion for innovation to every project. Here's an overview of the services I provide:
                </p>
            </div>
            <Cards data={services} cardType='services' />
            <div className='services__callout'>
                <p className='services__summary'>
                    Whether you're a startup looking to <span className='services__strong'>establish</span> your online presence or an established business seeking to enhance your digital footprint, 
                    I'm here to help you achieve your goals. Let's collaborate to turn your ideas into <span className='services__strong'>impactful digital solutions</span>.
                </p>
                <Link
                    className='services__action'
                    to='?service=help'
                    onClick={e => document.querySelector('#contact').scrollIntoView({behavior: 'smooth'})}
                    >get an offer!
                </Link>
            </div>
        </section>
    )
}

export default Services