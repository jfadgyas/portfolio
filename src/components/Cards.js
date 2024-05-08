import { useRef } from 'react'
import { Link } from 'react-router-dom'

import Icon from '@mdi/react';
import { mdilPlus } from '@mdi/light-js'

import '../style/cards.css'

const Cards = props => {

    /*
        Expected props:
            data: the list of cards
            cardType: type of the card, used to decide what info to show
    */

    /*
        Buttons on cards will be removed, when css animation timeline has full support
    */

    const itemRefs = useRef([]) // li, the boxes
    const cardRefs = useRef([]) // div, the info-box

    // Get direction where animation should start from
    const getDir = (e, item) => {
        const {width, height, top, left} = item.getBoundingClientRect()
        const mouseLeft = e.pageX - (left + window.scrollX)
        const mouseTop = e.pageY - (top + window.scrollY)
        const x = (mouseLeft - (width / 2) * (width > height ? (height / width) : 1))
        const y = (mouseTop - (height / 2) * (height > width ? (width / height) : 1))
        const dirNum = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
        return ['top', 'right', 'bottom', 'left'][dirNum]
    }
    
    // Handle mouse events for cards
    const mouseEvent = (e, direction) => {
        const item = e.type === 'click' ? e.target.closest('li') : e.currentTarget
        const card = item.id
        direction === 'in' ? item.classList.add('hover') : item.classList.remove('hover')
        cardRefs.current[card].classList='card__info-wrapper' // remove any additional class
        cardRefs.current[card].classList.add(`${direction}--${getDir(e, item)}`)
        cardRefs.current[card].setAttribute('aria-hidden', direction === 'out' ? true : false)
    }
    
    // Generate cards
    const cards = props.data.map((item, index) => 
        <li
            key={index}
            id={index}
            className='card__item'
            ref={ref => itemRefs.current.push(ref)}
            onMouseEnter={e => props.cardType === 'about' && mouseEvent(e, 'in')}
            onMouseLeave={e => props.cardType === 'about' && mouseEvent(e, 'out')}
            >
            <div className={`card__item-wrapper card__item-wrapper--${props.cardType}`}>
                <img className='card__img' src={item.img} alt=''/>
                <h4 className='card__title'>{item.title}</h4>
                <p className={`card__shortdesc card__shortdesc--${props.cardType}`}>{item.shortDesc}</p>
                <p className='card__price'>{item.price}</p>                
                <Link
                    className={`card__action card__action--${props.cardType}`}
                    to={item.link}
                    onClick={e => document.querySelector('#contact').scrollIntoView({behavior: 'smooth'})}
                    >{item.action}
                </Link>
                <a
                    className='card__icon'
                    href={item.link}
                    target='_blank'
                    rel="noreferrer"
                    onClick={e => props.cardType === 'about' && mouseEvent(e, 'in')}
                    >{item.icon}
                </a>
            </div>
            <div
                className='card__info-wrapper'
                aria-hidden
                ref={ref => cardRefs.current.push(ref)}>
                <button className='card__btn' onClick={e => mouseEvent(e, 'out')}>
                    <Icon
                        className='card__icon'
                        path={mdilPlus}
                        size={1.25}
                        rotate={45}
                    />
                </button>
                <div className='card__desc'>{item.desc}</div>
            </div>
        </li>
    )

    return (        
        <ul className='card__list'>
            {cards}
        </ul>
    )
}

export default Cards