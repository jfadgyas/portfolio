import { createBrowserRouter } from "react-router-dom"

import Menu from "./components/Menu"
import HomePage from "./components/HomePage"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        // children: [
        //     {
        //         index: true,
        //         element: <Home />
        //     },
        //     {
        //         path: '/about',
        //         element: <About />
        //     },
        //     {
        //         path: '/services',
        //         element: <Services />
        //     },
        //     {
        //         path: '/portfolio',
        //         element: <Portfolio />
        //     },
        //     {
        //         path: '/resume',
        //         element: <Resume />
        //     },
        //     {
        //         path: 'contact',
        //         element: <Contact />
        //     }
        // ]
    },
    // {
    //     path: '/home',
    //     element: <Home />
    // },
    // {
    //     path: '/about',
    //     element: <About />
    // },
    // {
    //     path: '/services',
    //     element: <Services />
    // },
    // {
    //     path: '/portfolio',
    //     element: <Portfolio />
    // },
    // {
    //     path: '/resume',
    //     element: <Resume />
    // },
    // {
    //     path: 'contact',
    //     element: <Contact />
    // }
])

export default router