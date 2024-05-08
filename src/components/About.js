import Icon from '@mdi/react'
import {
    mdilAccount,
    mdilMapMarker,
    mdilEmail,
    mdilPhone,
    mdilArrowRightCircle

} from '@mdi/light-js'
import {
    mdiLanguageHtml5,
    mdiLanguageCss3,
    mdiSass,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiReact,
    mdiNodejs,
    mdiDatabase,
    mdiGithub,
} from '@mdi/js'

import Cards from './Cards'

import '../style/about.css'

const About = () => {

    // Skills
    const skills = 
        <div className='about__skills skills'>
            <ul className='skills__list' data-anim={false}>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiLanguageHtml5} />
                    <p className='hoverra megfordul'>HTML</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiLanguageCss3} />
                    <p className='hoverra megfordul'>CSS</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiSass} />
                    <p className='hoverra megfordul'>Sass</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiLanguageJavascript} />
                    <p className='hoverra megfordul'>Javascript</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiLanguageTypescript} />
                    <p className='hoverra megfordul'>TypeScript</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiReact} />
                    <p className='hoverra megfordul'>React/Next</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiNodejs} />
                    <p className='hoverra megfordul'>Node.js</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiDatabase} />
                    <p className='hoverra megfordul'>(No)SQL</p>
                </li>
                <li className='skills__item'>
                    <Icon className='skills__icon' path={mdiGithub} />
                    <p className='hoverra megfordul'>Github</p>
                </li>
            </ul>
        </div>

    // Numbers
    const numbers = 
        <div className='about__numbers numbers'>
            <ul className='numbers__list'>
                <li className='numbers__item'>
                    <span className='numbers__number'>20+</span>
                    <span className='numbers__detail'>Years experience</span>                        
                </li>
                <li className='numbers__item'>
                    <span className='numbers__number'>27%</span>
                    <span className='numbers__detail'>Increase of projects</span>                        
                </li>
                <li className='numbers__item'>
                    <span className='numbers__number'>2</span>
                    <span className='numbers__detail'>New thigs learned</span>                        
                </li>
            </ul>
        </div>

    // Contact details
    const contacts = 
        <div className='about__detail-wrapper'>
            <span className='about__detail'><Icon className='about__icon' path={mdilAccount} />Janos Fadgyas</span>
            <span className='about__detail'><Icon className='about__icon' path={mdilMapMarker} />Amsterdam, Netherlands</span>
            <a className='about__link' href='mailto:janosf@gmail.com'><Icon className='about__icon' path={mdilEmail} />janosf@gmail.com</a>
            <a className='about__link' href='tel:1-800-555666'><Icon className='about__icon' path={mdilPhone} />1-800-555666</a>
        </div>

    const details = [
        {
            img: 'set4/expertise.jpg',
            title: 'Proven Expertise',
            shortDesc: 'Over 20 years of hands-on experience...',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: 'With over 20 years of hands-on experience in website development, I have successfully delivered a diverse range of projects across various industries. My portfolio showcases a commitment to quality, functionality, and user experience.'
        },
        {
            img: 'set4/customised-products.jpg',
            title: 'Customised Products',
            shortDesc: 'I understand that each business is unique...',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: "I understand that each business is unique. I specialize in tailoring websites to match the specific needs and goals of my clients. Whether it's a sleek portfolio site, a robust e-commerce platform, or a feature-rich corporate website, I have the skills to bring your vision to life.",
        },
        {
            img: 'set4/result.jpg',
            title: 'Results-Driven Solutions',
            shortDesc: 'Contribute to the success of your business...',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: "My goal is not just to build websites but to contribute to the success of your business. I implement SEO best practices, performance optimization, and other strategies to enhance your website's visibility, functionality, and overall effectiveness.",
        },
        {
            img: 'set4/needs.jpg',
            title: 'Understanding Your Needs',
            shortDesc: 'Discover your business...',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: "Before delving into the technical aspects, I would like to understand more about your business and your specific requirements.",
        },
        {
            img: 'set4/collab.jpg',
            title: 'Collaborative Approach',
            shortDesc: 'I work collaboratively to ensure your expectations...',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: "I believe in open and transparent communication throughout the development process. Your input is invaluable, and I work collaboratively to ensure that the final product aligns seamlessly with your expectations and business objectives.",
        },
        {
            img: 'set4/support.png',
            title: 'Responsive Support',
            shortDesc: 'I provide ongoing support and maintenance...',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: "Your journey with me doesn't end at the website launch. I provide ongoing support and maintenance to address any issues promptly, ensuring that your website continues to perform at its best.",
        },
        {
            img: 'set4/expertise.jpg',
            title: 'Skills',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: skills,
        },
        {
            img: 'set4/expertise.jpg',
            title: 'Numbers',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: numbers,
        },
        {
            img: 'set4/expertise.jpg',
            title: 'Contact',
            icon: <Icon className='about__icon about__icon--large' path={mdilArrowRightCircle} />,
            desc: contacts,
        },
    ]

    return (
        <section id='about' className='about'>
            <div className='about__wrapper'>
                <h2 className='about__title'>I'm a results-driven developer known for my solution-oriented approach</h2>
                <p className='about__desc'>
                    With a keen eye for detail and a passion for problem-solving, I specialize in overcoming challenges that others may find daunting. 
                    I've cultivated a reputation for unraveling complexities and transforming obstacles into opportunities. 
                    From intricate coding dilemmas to user experience puzzles, I thrive on delivering solutions that not only meet expectations but exceed them. 
                    Explore my portfolio to witness firsthand how I turn challenges into triumphs, and let's collaborate on crafting the perfect solution for your digital needs!
                </p>
            </div>
            <Cards data={details} cardType='about' />
        </section>
    )
}

export default About