import React from 'react'
import {useNavigate} from 'react-router-dom';
import {LoginConatiner} from '../Components/Login/Loginelements' 
import {Nav,NavbarContainer,Navlogo} from '../Components/Login/Loginelements'
import {Navmenu,NavbrBtn,NavBtnLink} from '../Components/Home/NavbrElements'

function Contact() {
  const navigate=useNavigate();
  function BackHome(){
    navigate("/Home")
  }
  return (
    <>
    <Nav>
  <NavbarContainer>
  <Navlogo to='/'>React</Navlogo>
  <Navmenu> 
  
  <NavbrBtn>
        <NavBtnLink to='/HomePage'>GoBack</NavBtnLink>
      </NavbrBtn>
  </Navmenu>
  </NavbarContainer>
  </Nav>
      <LoginConatiner>
 <div class="card" >
    <img class="card-img-top" src="logo192.png" alt="Card image cap"/>
    <div class="card-body">
      <h3>Contact</h3>
    </div>
    </div>
    </LoginConatiner>
   
    </>
  )
}

export default Contact