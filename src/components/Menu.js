import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Icon from '@mdi/react';
import { 
    mdilHome, 
    mdilAccount,
    mdilEmail,
    mdilPlus,
    mdilMenu,
    mdilFolderMultiple
} from '@mdi/light-js'

import '../style/menu.css'

const Menu = () => {

    const [links, setLinks] = useState()
    const menu = useRef(null)

    // Menu links. Could use refs or hashrouter, but it's less complicated
    useEffect(() => {
        setLinks({
            home: document.querySelector('#hero'),
            about: document.querySelector('#about'),
            portfolio: document.querySelector('#portfolio'),
            services: document.querySelector('#services'),
            resume: document.querySelector('#resume'),
            contact: document.querySelector('#contact')
        })
    }, [])

    // Show / hide hamburger
    const handleClick = e => {
        const node = e.target.closest('li')
        const burger = e.target.closest('button')
        if (!burger && !node) return
        menu.current.classList.toggle('open')
    }

    return (
        <nav
            className='menu'
            ref={menu}
            onClick={e => handleClick(e)}>
            <ul className='menu__list'>
                <li className='menu__item'>
                    <div className='menu__burger'>
                        <Icon
                            className='menu__icon'
                            path={mdilMenu}
                        />
                        <Icon
                            className='menu__icon'
                            path={mdilPlus}
                            rotate={45}
                        />                    
                    </div>
                </li>
                <li className='menu__item'>
                    <Link
                        className='menu__link'
                        to='/'
                        onClick={() => links.home.scrollIntoView({behavior: 'smooth'})}>
                        <Icon
                            className='menu__icon'
                            path={mdilHome}
                        />
                        <span className=''>Home</span>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link
                        className='menu__link'
                        to='/'
                        onClick={() => links.about.scrollIntoView({behavior: 'smooth'})}>
                        <Icon
                            className='menu__icon'
                            path={mdilAccount}
                        />
                        <span className=''>About</span>
                    </Link>   
                </li>
                <li className='menu__item'>
                    <Link
                        className='menu__link'
                        to='/'
                        onClick={() => links.portfolio.scrollIntoView({behavior: 'smooth'})}>
                        <Icon
                            className='menu__icon'
                            path={mdilFolderMultiple}
                        />
                        <span className=''>Work</span>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link
                        className='menu__link'
                        to='/'
                        onClick={() => links.contact.scrollIntoView({behavior: 'smooth'})}>
                        <Icon
                            className='menu__icon'
                            path={mdilEmail}
                        />
                        <span className=''>Contact</span>
                    </Link>
                </li>                    
            </ul>
        </nav>
    )
}

export default Menu