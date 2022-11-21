import {Route,Routes, useNavigate} from "react-router-dom";
//import { useHistory } from "react-router-dom";
import './App.css';
//import Home from './pages/Home';--just
import Login from "./pages/Login";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Aboutus from "./pages/About_us";
import HomePage from "./Components/Home/Home";


//import React,{useState} from 'react'

//var bcrypt = require('bcryptjs');

function App() {
  /*var passwordinput;
  var hashed;
  //const history=useHistory();
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
 }

 if (passwordmatch=="FALSE"){
  alert("Invalid Password")
 }
 else{
  alert("Valid Password")
 }

 if (emailmatch=="TRUE" && passwordmatch=="TRUE"){
  //history.push("/Home")
 }
  };*/
  return (
    
    <div className="App">
<Routes>
<Route path="/" element={<Login/>} />
<Route path="/HomePage" element={<HomePage/>}/>
<Route path="/Home" element={<Home/>} />
<Route path="/Jobs" element={<Jobs/>} />
<Route path="/Contact" element={<Contact/>} />
<Route path="/Aboutus" element={<Aboutus/>} />
</Routes>
</div>

  );
}

export default App;
