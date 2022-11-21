//import React from 'react';
import {useNavigate} from 'react-router-dom';
import React,{useState} from 'react';
import {LoginConatiner} from '../Components/Login/Loginelements' 
import {Nav,NavbarContainer,Navlogo} from '../Components/Login/Loginelements'
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
//toast.configure()
import swal from 'sweetalert';

var bcrypt = require('bcryptjs');



function Login() {
    var passwordinput;
    var hashed;
    //const history=useHistory();
    const navigate=useNavigate();
    //const [message, setMessage] = useState('');
     const [email, setEmail] = useState('');
     const [password,setPass] = useState('');
     const [emailprint,setEmailPrint]=useState(false);
     const [passwprint,setPassPrint] = useState(false);
  
     function compareHash(passwordinput,hashed){
      return bcrypt.compareSync(passwordinput,hashed)
     }
    const handleChange = (event) => {
     //console.log('Event:',event.target.value)
      setEmail(event.target.value)
     //console.log("Hello")
     
    };  
  
    const handlePass = (pass) => {
      setPass(pass.target.value)
      
    };
    var emailmatch="FALSE"
    var passwordmatch="FALSE"
    const handleClick = async (event) => {
     // setUpdated(message);
     // console.log(message);
    
     event.preventDefault();
     setEmailPrint(true)
     setPassPrint(true)
     console.log(email)
     console.log(password)
      const response= await fetch('http://localhost:9000/api/')
     const data= await response.json()
     if (!response.ok){
        console.log(data.description)
        return
     }
    // console.log(data)
  
  //var passwordmatch="FALSE"
  var  passwordapi;
  var bool;
     console.log(data)
     console.log(emailmatch)
     for(let i=0;i<data.length;i++){
      if(data[i].email == email){
        console.log('inside match')
        emailmatch="TRUE"
      }
      console.log(data[i].email);
      passwordapi=data[i].password
      console.log(passwordapi)
    
       bool=compareHash(password,passwordapi)
       console.log(bool)
          if (bool==true){
            passwordmatch="TRUE"
          }
   }
   console.log(emailmatch)
   console.log(passwordmatch)
   if (emailmatch=="FALSE"){
    alert("User not in DB")
   }
   else{
    alert("User exists")
    //toast("User exists");

   }
  
   if (passwordmatch=="FALSE"){
    alert("Invalid Password")
   }
   else{
    alert("Valid Password")
   }
  
   if (emailmatch=="TRUE" && passwordmatch=="TRUE"){
    //history.push("/Home")
    navigate("/HomePage")
    
   }
    };
    return (
      
      <>
<Nav>
  <NavbarContainer>
  <Navlogo to='/'>React</Navlogo>
  
  </NavbarContainer>
  </Nav>
 
  <LoginConatiner>
  <div class="card" >
  <img class="card-img-top" src="logo192.png" alt="Card image cap"/>
  <div class="card-body">
    <h3>Login</h3>
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email"  onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
  
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" onChange={handlePass} class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
   <div>
    <button type="submit" onClick={handleClick} class="btn btn-primary" id="loginbtn">Submit</button>
    <ToastContainer/>
    </div>
  </form>
  </div>

  </div>
  </LoginConatiner>  
  </>
  
    );
  }

export default Login