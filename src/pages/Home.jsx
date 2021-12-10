import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Home.css"
import Typed from 'react-typed'

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="container-fluid" id="parent">

                {/* img div */}
                <div className="img_div">
                    <img src="https://i.ibb.co/jgGtMsJ/Fcn0-H4-Ag-400x400.jpg" alt="dp" className="img_dp" />
                </div>

                {/* text div */}
                <div className="text_div">
                    <p className="p1">
                        Hi, I'm <span>Tamal</span> 👋
                    </p>
                    <p className="p2">
                        I'm a
                        <Typed
                            strings={[" Developer", " Designer", " Hustler"]}
                            typeSpeed={80}
                            loop
                            className="typ"
                        />

                    </p>



                    <p className="p3">
                        A 20 year old passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
