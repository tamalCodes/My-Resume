import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Home.css"
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid" id="parent_1">

                {/* img div */}
                <div className="img_div">
                    <img src="https://i.ibb.co/jgGtMsJ/Fcn0-H4-Ag-400x400.jpg" alt="dp" className="img_dp" />
                </div>

                {/* text div */}
                <div className="text_div">
                    <p className="parent_1_p1">
                        Hi, I'm <span>Tamal</span> 👋
                    </p>
                    <p className="parent_1_p2">
                        I'm a
                        <Typed
                            strings={[" Developer", " Designer", " Hustler"]}
                            typeSpeed={80}
                            loop
                            className="typ"
                        />

                    </p>



                    <p className="parent_1_p3">
                        A 20 year old passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                    </p>
                </div>
            </div>


            <div className="container-fluid" id="parent_2">
                <p className="parent_2_p1">
                    Connect with me or take a look at my projects
                </p>

                <Link to="/about"><i class="fas fa-handshake i1"></i></Link>

                <Link to="/project"><i class="fas fa-laptop-code i2"></i></Link>



            </div>



        </>
    )
}

export default Home
