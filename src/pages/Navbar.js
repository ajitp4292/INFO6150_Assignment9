import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <ul>
        <li><Link to="/"></Link>Aboutus</li>
        <li><Link to="/"></Link>Contact</li>
        <li><Link to="/"></Link>Jobs</li>
    </ul>
  )
}

export default Navbar