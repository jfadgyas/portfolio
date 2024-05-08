import { useSearchParams } from "react-router-dom"

import Menu from "./Menu"
import Home from "./Home"
import About from "./About"
import Services from './Services'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'

const HomePage = () => {

    // Passing service messages to contact form
    const [search] = useSearchParams()
    const service = search.get('service') || ''

    return (
        <div>
            <Menu />
            <Home />
            <About />
            <Portfolio />
            <Services />
            <Resume />
            <Contact service={service}/>
        </div>
    )
}

export default HomePage