import React, { useEffect, useState } from 'react'
import './Signin.css';
export default function Signin(props) {
    const [username,setusername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    useEffect(() => {
      document.title = 'Sign in Page';
    }, []);
    const setvalue = (check) => (e) => {
      if (check === "1") {
        setusername(e.target.value);
      } else if (check === "2") {
        setPassword(e.target.value);
      } 
      else if(check === '3'){
        setEmail(e.target.value);
      }
      else console.log("Value is not passed");
    }
    const signin = () =>{
      if(username && password && email){
        fetch("http://localhost:8081/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email,username,password }),
      }).then((res) => res.json()).then((data) => {
          if(data.statusmessage){
            alert("Sign up Successfully..");
              props.loader(10);
              login1();
              props.loader(100);
          }
          else{
            alert("Email/Username Already Exist..!");
              console.log(data);
          }

      });
      }
      else{
        alert("Username and Password Not Should be Empty....!")
      }
    }
    const login1 = () =>{
      props.loader(10);
      props.setlogin(true);
      props.loader(60);
      props.setSignin(false);
      props.loader(100);
    }
    return (
    <>
    <div className="dialog1">
        <div className="dialog-content1">
          <div className="head1">
            <h2 className="walker1">Walker</h2>
          </div>
          <div className="email1">
            <h4>Email Address</h4>
            <input
              type="text"
              value={email}
              onChange={setvalue("3")}
              className="emailEntry1"
              required
            />
          </div>
          <div className="username1">
            <h4>Username</h4>
            <input
              type="text"
              value={username}
              onChange={setvalue("1")}
              className="usernameEntry1"
              required
            />
          </div>
          <div className="password1">
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={setvalue("2")}
              className="passwordEntry1"
              required
            />
          </div>
          <div className="login1">
            <button className="loginButton1" onClick={signin}>Sign Up</button>
          </div>
          <div className="signin1">
            <h6 className="signintext1">Already have Account ?</h6>
            <button className="signinbutton1" onClick={login1}>
              LogIn
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
