import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"

import "../styles/About.css"
const About = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid" id='ab_parent1'>

                {/* Hi image */}
                <div className="ab_img_div">
                    <img src="https://i.ibb.co/FhWMSnw/Young-man-gesture-and-say-hi-generated-removebg-preview.png" alt="" className="ab_img" />
                </div>

                {/* About div */}
                <div className="ab_main">
                    <h3 className="ab_head1">About Me</h3>

                    <p className="ab_p1">Hello I'm tamal , i have done my schooling from Carmel School , on science with 94% in boards.
                        <br />Currently I am pursuing Bachelors in CSE from UEM Kolkata. <br /> On my way to a Fullstack Web dev and also contributing to Open source , hackathons to improve myself.
                    </p>

                    <p className="ab_p2">

                        <img src="https://i.ibb.co/JqCWHgr/git.png" alt="" className='social' />
                        <img src="https://i.ibb.co/YDJJ48m/ins-1.png" alt="" className='social' />
                        <img src="https://i.ibb.co/rFwscZj/t.png" alt="" className='social' />
                        <img src="https://i.ibb.co/3BGR5Td/li.png" alt="" className='social' />
                    </p>
                </div>
            </div>

            <div className="container-fluid" id='pro_parent_2'>
                <Link to="/"> <img className='home_img' src="https://i.ibb.co/sjbKTr0/house.png" alt="home" /></Link>
            </div>
        </>
    )
}

export default About
