import React from 'react'
import './Updatepass.css'
import { useState } from 'react'
export default function Updatepass(props) {
    const [oldpassword,setold] = useState('');
    const [newpassword,setnew] = useState('');
    const [username,setnewusername] = useState(props.username1);
    const setvalue = (check) => (e) => {
        if (check === "1") {
          setold(e.target.value);
        } else if (check === "2") {
          setnew(e.target.value);
        } else console.log("Value is not passed");
      }
      const updateresult = () =>{
        if(oldpassword&&newpassword){

            fetch("http://localhost:8081/updatepassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username,oldpassword,newpassword }),
            }).then((res) => res.json()).then((data) => {
                if(data.statusmessage){
                    props.mainloader(10);
                    props.onpasschange()
                    props.mainloader(100);
                }
                else{
                    console.log(data);
                }

            });
        }
        else{
            alert("Please Fill All the fields...");
        }
      }
  return (
    <>
     <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
     <div className="dialog">
        <div className="dialog-content">
          <div className="head">
            <h2 className="walker">Walker</h2>
            <button className="close"> <span class="material-symbols-outlined" style={{cursor:'pointer'}} onClick={()=>{props.updatepa()}}>close</span></button>
          </div>
          <div className="welcome">
            <h3 className="welcometext">{props.username1}</h3>
          </div>
          <div className="username">
            <h4>Old Password</h4>
            <input
              type="password"
              value={oldpassword}
              onChange={setvalue("1")}
              className="usernameEntry"
              required
            />
          </div>
          <div className="password">
            <h4>New Password</h4>
            <input
              type="password"
              value={newpassword}
              onChange={setvalue("2")}
              className="passwordEntry"
              required
            />
          </div>
          <div className="login">
            <button className="loginButton" onClick={updateresult}>Modifie</button>
          </div>
        </div>
      </div>
    </>
  )
}
