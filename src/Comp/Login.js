import React, { useEffect, useState } from "react";
import "./Login.css";
export default function Login(props) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.title = 'Log in Page';
  }, []);
  const chekclog = () => {
    props.setlogin(false);
  };
  const signin = () => {
    chekclog();
    props.loader(10);
    props.loader(60);
    props.setSignin(true);
    props.loader(100);
  };
  const setvalue = (check) => (e) => {
    if (check === "1") {
      setName(e.target.value);
    } else if (check === "2") {
      setPassword(e.target.value);
    } else console.log("Value is not passed");
  }
  const login = () =>{
    if(username && password){
      console.log("Welcome");
      fetch("http://localhost:8081/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }).then((res) => res.json()).then((data) => {
        props.loader(10);
        props.setlogin(data.statusmessage);
        props.loader(60);
        props.setUser(username)
        props.loader(100)
        });
    }
    else{
      alert("Username and Password Not Should be Empty....!")
    }
  }
  return (
    <>
      <div className="dialog">
        <div className="dialog-content">
          <div className="head">
            <h2 className="walker">Walker</h2>
          </div>
          <div className="welcome">
            <h3 className="welcometext">Welcom Back ,</h3>
          </div>
          <div className="username">
            <h4>Username</h4>
            <input
              type="text"
              value={username}
              onChange={setvalue("1")}
              className="usernameEntry"
              required
            />
          </div>
          <div className="password">
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={setvalue("2")}
              className="passwordEntry"
              required
            />
          </div>
          <div className="login">
            <button className="loginButton" onClick={login}>Login</button>
          </div>
          <div className="signin">
            <h6 className="signintext">Don't Have Account ?</h6>
            <button className="signinbutton" onClick={signin}>
              Sign Up
            </button>
          </div>
          <div className="forgotpass">
            <button className="forgotpasswordbutton">Forgot Password ?</button>
          </div>
        </div>
      </div>
    </>
  );
}
