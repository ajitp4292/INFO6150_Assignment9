import React from 'react';
//import Jobs from "./pages/Jobs";
//import Contact from "./pages/Contact";
//import Aboutus from "./pages/About_us";
import {useNavigate} from 'react-router-dom';
const heading={
    color: 'blue',
    display: 'inline'

}
const tophead={
    marginTop:'0'
}

function Home() {
    const navigate=useNavigate();
    function redirectJob(){
        navigate("/Jobs")
    }
    function redirectContact(){
        navigate("/Contact")
    }
    function redirectAbout(){
        navigate("/Aboutus")
    }

    function redirectLogin(){
        navigate("/")
    }
  return (
    <div>
          
<h3 style={tophead}>Welcome to Homepage</h3>
<ul>
    <li className='list' onClick={redirectAbout}>Aboutus</li>
    <li className='list' onClick={redirectContact}>Contact</li>
    <li className='list' onClick={redirectJob}>Jobs</li>
</ul>
<button style={heading} onClick={redirectLogin} >Logout</button>
    </div>
  )
}

export default Home