import React from "react";
import "./Sidebar.css";
export default function Sidebar(props) {
  const closebutton1 = () => {
    console.log("Close button is cliked");
    props.setsidebarfalse();
  }
  const logout1 = () =>{
    const confirmed = window.confirm('Do you want to proceed?');
    if(confirmed){
        props.mainloader(10);
        props.logout();
        props.mainloader(100);
    }
  }
  const update = ()=>{
    closebutton1()
    props.updatepa()
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="sidebar">
        <button className="closebutton" onClick={closebutton1}>
          <span class="material-symbols-outlined">close</span>
        </button>
        <ul className="buttons">
            <li className="changepassword"><button className="changepassbutton" onClick={update}>Change Password</button></li>
            <li className="logout"><button className="logoutbutton" onClick={logout1}>Log out</button></li>
            <li className="setting"><button className="settingbutton">Setting</button></li>
            <li className="deleteacc"><button className="deleteaccbutton">Delete Account</button></li>
        </ul>
      </div>
    </>
  );
}
