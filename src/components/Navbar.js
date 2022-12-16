import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <div className="nav-section">
            <Link to='/'><h1>Know <span>Your</span> Cocktail</h1></Link>
            <ul>
                <li><Link to='/' className= "nav-links">Home</Link></li>
                <li><Link to='/about' className="nav-links">About</Link></li>
            </ul></div>
        </nav>
    )
}

export default Navbar