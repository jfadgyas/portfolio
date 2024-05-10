import { useState, useRef } from 'react';

import Icon from '@mdi/react';
import { 
    mdilAccount,
    mdilEmail,
    mdilPhone,
    mdilMapMarker,
    mdilMessageText,
    mdilArrowRightCircle,
    mdilThumbUp,
    mdilThumbDown
} from '@mdi/light-js'

import '../style/contact.css'
import PostForm from './PostForm'
import Spinner from './Spinner'
import RenderIf from './RenderIf'

const MESSAGES = {
    site: "I think it's time to set me up with a website. Let's discuss your vision and how we can bring it to life!",
    test: "Let's ensure everything runs smoothly – time for testing! Are you available to discuss?",
    database: "It's time to organize my data effectively. Shall we discuss setting up a database?",
    dataentry: "Time to input my data. Ready to get started?",
    documentation: "Let's document this code for clarity and ease of understanding. Ready to begin?",
    animation: "Spice up your site with animation. Ready to add some flair?",
    teaching: "Excited to dive into learning with you. Ready to get started?",
    help: "I'm curious about your services and prices. Let's chat!",
}

const Contact = ({service}) => {

    const [status, setStatus] = useState({
        result: '',
        message: ''
    })
    const inputRefs = useRef([])    


    // Focus goes to next field on Enter
    const handleKey = e => {
        if (e.key === 'Enter') {
            const index = +e.target.dataset.index
            if (index < 3) return inputRefs.current[index + 1].focus()
        }
    }
    
    // Display error message for input fields
    const showError = (field, message) => field.nextElementSibling.innerText = message

    // Input field validation
    const validate = field => {
        let message = ''

        // Check if the field is ok
        if (field.matches(':valid')) return showError(field, message)
        
        // Otherwise
        switch (field.id){
            case 'name': 
                // Name can only be empty
                message = 'Can I call you Al?'
                break
            case 'message': 
                // Message can only be empty
                message = 'Would you like to tell me something?'
                break
            case 'email':
                // Incorrect email
                message = 'Cant reach you on this email address'
                break
            case 'phone': 
                // Incorrect phone
                message = 'Cant call you on this number'
                break
            default: return
        }
        showError(field, message)
    }

    // Pass form data to the server
    const sendForm = () => {
        // If form is valid => send
        // Otherwise validate fields
        if (document.forms[0].checkValidity()){
            return PostForm(Object.keys(MESSAGES), setStatus)
        }
        inputRefs.current.map(field => validate(field)) // eslint map return value
    }

    // Handle button under form
    const handleClick = () => {
        status.message === '' && sendForm()
        if (status.result === 'success'){
            document.forms[0].reset()
            setStatus({result: false, message: ''})
        }
        //form disabled, reset
        if (status.result === 'error'){
            setStatus({result: false, message: ''})
        }
    }

    return (
        <section id='contact' className='contact'>
            <h3 className='contact__title'>Business card & Contact</h3>
            <div className='contact__container'>
                <ul className='contact__list'>
                    <li className='contact__details'>
                        <Icon path={mdilAccount} size={1} />
                        <span>Janos Fadgyas</span>
                    </li>
                    <li className='contact__details'>
                        <Icon path={mdilMapMarker} size={1} />
                        <span>Amsterdam, Netherlands</span>
                    </li>
                    <li className='contact__details'>
                        <Icon path={mdilEmail} size={1} />
                        <a className='contact__link' href='mailto:janosf@gmail.com'>janosf@gmail.com</a>
                    </li>
                    <li className='contact__details'>
                        <Icon path={mdilPhone} size={1} />
                        <a className='contact__link' href='tel:1-800-555666'>1-800-555666</a>
                    </li>
                    <li className='contact__details'>
                        <Icon path={mdilMapMarker} size={1} />
                        <span>KvK: 18009001000</span>
                    </li>
                </ul>
            
                <form className='contact__form'>
                    <label className='contact__label' htmlFor='name'>
                        <Icon path={mdilAccount} size={1} />
                        <input
                            className='contact__input'
                            id='name'
                            type='text'
                            name='name'
                            placeholder='Your name'
                            required={true}
                            data-index='0'
                            ref={ref => inputRefs.current[0] ? ref : inputRefs.current.push(ref)}
                            onBlur={e => validate(e.target)}
                            onKeyUp={e => handleKey(e)}
                        />
                        <span className='contact__error'>
                        </span>
                    </label>
                    <label className='contact__label' htmlFor='email'>
                        <Icon path={mdilEmail} size={1} />
                        <input
                            className='contact__input'
                            id='email'
                            type='text'
                            name='email'
                            placeholder='Email'
                            pattern='^((?!\.)[\-\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$'
                            required={true}
                            data-index='1'
                            ref={ref => inputRefs.current[1] ? ref : inputRefs.current.push(ref)}
                            onBlur={e => validate(e.target)}
                            onKeyUp={e => handleKey(e)}
                        />
                        <span className='contact__error'>
                        </span>
                    </label>
                    <label className='contact__label' htmlFor='phone'>
                        <Icon path={mdilPhone} size={1} />
                        <input
                            className='contact__input'
                            id='phone'
                            type='text'
                            name='phone'
                            placeholder='Phone'
                            pattern='\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}'
                            required={true}
                            data-index='2'
                            ref={ref => inputRefs.current[2] ? ref : inputRefs.current.push(ref)}
                            onBlur={e => validate(e.target)}
                            onKeyUp={e => handleKey(e)}
                        />
                        <span className='contact__error'>
                        </span>
                    </label>
                    <label className='contact__label' htmlFor='message'>
                        <Icon path={mdilMessageText} size={1} />
                        <textarea
                            className='contact__message'
                            id='message'
                            name='message'
                            placeholder='Message'
                            defaultValue={MESSAGES[service]}
                            required={true}
                            data-index='3'
                            ref={ref => inputRefs.current[3] ? ref : inputRefs.current.push(ref)}
                            onBlur={e => validate(e.target)}
                            onKeyUp={e => handleKey(e)}
                        ></textarea>
                        <span className='contact__error'>
                        </span>
                    </label>
                    <input
                        className='contact__input'
                        id='subject'
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        hidden={true}
                        defaultValue={service}
                    />
                    <button
                        className={`contact__button contact__button--${status.result}`}
                        type='button'
                        onClick={() => handleClick()}>
                        <Icon path={
                            status.result === 'success' ? mdilThumbUp :
                            status.result === 'error' ? mdilThumbDown : 
                            mdilArrowRightCircle} size={2} />
                    </button>
                    <RenderIf isTrue={status.result === 'sending'}>
                        <Spinner />
                    </RenderIf>
                    <div className={`contact__result contact__result--${status.result}`}>{status.message}</div>
                </form>            
            </div>
        </section>
    )
}

export default Contact