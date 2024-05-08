import '../style/home.css'

const Home = () => {

    // Scrolling list
    const whatIam = [
        'I am a developer',
        'I solve problems',
        'I code solutions',
    ]

    const showWhatIam = whatIam.map(item =>
        <li key={item} className='hero__changing-item'>{item}</li>    
    )

    return (
        <section id='hero' className='hero'>
            <h3 className='hero__title'>Hi!</h3>
            <h1 className='hero__name'>Janos Fadgyas</h1>
            <h3 className='hero__title'>
                <ul className='hero__changing-list'>{showWhatIam}</ul>
            </h3>
            <p className='hero__desc'>
                I offer digital solutions tailored to the unique needs of businesses and individuals to thrive in the digital landscape. 
            </p>
        </section>
    )
}

export default Home