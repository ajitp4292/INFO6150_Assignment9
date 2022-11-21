import React from 'react'
import {useNavigate} from 'react-router-dom';
import {LoginConatiner} from '../Components/Login/Loginelements' 
import {Nav,NavbarContainer,Navlogo} from '../Components/Login/Loginelements'
import {Navmenu,NavbrBtn,NavBtnLink} from '../Components/Home/NavbrElements'


 function About_us() {
  const navigate=useNavigate();
  function BackHome(){
    navigate("/Home")
  }
  
    /*const response=  fetch('http://localhost:9000/api/')
    const userdata = response.json()*/
    

const data=[
  {
    id:1,name:"John"
  },
  {
    id:2,name:"Fred"
  },
  {
    id:3,name:"Sarah"
  },
  {
    id:4,name:"Micheal"
  }
]
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
      <h3>Aboutus</h3>
<div>
  {
    data.map((users)=>(
    <div>{users.name}</div>  
    ))
  }
</div>
    </div>
    </div>
    </LoginConatiner>
    </>
  )
}

export default About_us

