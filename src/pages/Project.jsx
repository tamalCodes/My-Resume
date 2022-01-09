import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../styles/Project.css"

const Project = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid" id="pro_parent_1">

                <h4 className="pro_parent_1_header1">My Projects <i class="fas fa-code i1"></i></h4>

                <a href="https://iamtamal.github.io/Co-Winn/"><img src="https://i.ibb.co/XxFJ7W2/pr1.png" className="prs" alt="" /></a>

                <a href="https://iamtamal.github.io/avatar-generator/"><img src="https://i.ibb.co/7pWxWpS/pr2.png" className="prs" alt="" /></a>

                <a href="https://clone-46584.web.app/"><img src="https://i.ibb.co/gRQkc9s/pr4.png" className="prs" alt="" /></a>

                <a href="https://iamtamal.github.io/Milan/"><img src="https://i.ibb.co/3My9Z0X/pr5.png" className="prs" alt="" /></a>

                <a href="https://pholbum.netlify.app/"><img src="https://i.ibb.co/B3SHgHr/PhoLbum.png" className="prs" alt="" /></a>

                <a href="https://class-book.netlify.app/"><img src="https://i.ibb.co/wSpkKd8/class-book.png" className="prs" alt="" /></a>

                <a href="https://memoirs-tamal.netlify.app/"><img src="https://i.ibb.co/Psy7Jfz/memoirs.png" className="prs" alt="" /></a>
            </div>

            <div className="container-fluid" id='pro_parent_2'>
                <Link to="/"> <img className='pro_home_img' src="https://i.ibb.co/sjbKTr0/house.png" alt="home" /></Link>
            </div>
        </>
    )
}

export default Project
