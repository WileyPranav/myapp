
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( <div className="navbar">
        <h1>Pranav Shastri</h1>
        <div className="links">
        <Link to= "/"> Home</Link>
        <Link  to='/Academics'> Acedemics</Link>
        <Link to='/Lists'> List of Subjects</Link> 
        <Link to='/AddSubject'> Add Subject</Link> 
        <Link to = '/ContactUs'>Contact Us</Link>
        <Link to = "/AboutMe">About ME</Link>
        </div>
    </div> );
}
 
export default Navbar;