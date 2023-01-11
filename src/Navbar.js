import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/dashboard"><li>DASHBOARD</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
        </ul>
    </div>
  )
}

export default Navbar
