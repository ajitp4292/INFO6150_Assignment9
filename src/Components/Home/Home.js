import React from 'react'
import {Nav,NavbarContainer,Navlogo,MobileIcon,Navmenu,NavItem,NavLinks,NavbrBtn,NavBtnLink} from './NavbrElements'
import {FaBars} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import About_us from '../../pages/About_us';
import Contact from '../../pages/Contact';
import { MainContainer,MainBg,VideoBg } from '../Main Section/mainsectionelements';
import Video from '../video/video.mp4'
const Home = () => {
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
   <>
   <Nav>
    <NavbarContainer>
        <Navlogo to='/'>React</Navlogo>
        <MobileIcon>
            <FaBars/>
        </MobileIcon>
<Navmenu>   
<NavItem> 
    <NavLinks to='/Aboutus'>Aboutus</NavLinks>
    </NavItem>
    <NavItem>
    <NavLinks to ='/Contact'>  Contact </NavLinks>
    </NavItem>
    <NavItem >
     <NavLinks to='/Jobs'> Jobs </NavLinks>
      </NavItem> 
      <NavbrBtn>
        <NavBtnLink to='/'>Logout</NavBtnLink>
      </NavbrBtn>
    </Navmenu>
    </NavbarContainer>
   </Nav>
   <MainContainer id="Home">
<MainBg>
    <VideoBg autoplay loop muted src={Video} type='video/mp4'/>
</MainBg>
    </MainContainer>
   </>
  )
}

export default Home