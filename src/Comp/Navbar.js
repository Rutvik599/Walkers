import React, { useEffect, useState } from "react";
import './Navbar.css';
import Sidebar from "./Sidebar";
import Updatepass from "./Updatepass";
export default function Navbar(props) {
  const [issidebar,setissidebar] = useState(false);
  const [isupdate,setisupdate] = useState(false)
  const [search,setSearch] = useState('');
  useEffect(() => {
    document.title = 'Walkers';
  }, []);
  const searchset = (e) =>{
    setSearch(e.target.value);
    
  }
  const setsidebartrue = () =>{
    props.loader(50);
    setissidebar(true)
    props.loader(100);
  }
  const setsidebarfalse = () =>{
    props.loader(10);
    setissidebar(false)
    props.loader(100);
  }
  const logout = () =>{
    props.setlogin(true);
  }
  const mainloader = (value)=>{
    props.loader(value);
  }
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      props.setSearch1(search);
    }
    else{
      if(!search){
        props.setSearch1('');
      }
    }
  }
  return (
    <>
      <div className="main">
        <div className="brandname">
        <input type="text" placeholder="What Are you looking for ?" className="searchtext"  onKeyPress={handleSearch} value={search} onChange={searchset}/>
        <h2 className="brandnametext" onClick={() => {window.location.reload();}}>Walker</h2>
        <h5 className="username" onClick={setsidebartrue}>{props.username}</h5>
        </div>
        <div className="navbar">
          <nav className="nav">
            <ul className="ul">
              <li className="home">
                <button className="homebutton">Home</button>
              </li>
              <li className="shopall">
                <button className="shopallbutton">Shop All</button>
              </li>
              <li className="men">
                <button className="menbutton">Men</button>
              </li>
              <li className="women">
                <button className="womenbutton">Women</button>
              </li>
              <li className="child">
                <button className="childbutton">Children</button>
              </li>
              <li className="richcotton">
                <button className="richcottonbutton">Cart</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {issidebar&&<Sidebar setsidebarfalse={setsidebarfalse} logout = {logout} mainloader = {mainloader} updatepa = {()=>{setisupdate(true)}}/>}
      {isupdate&&<Updatepass updatepa = {()=>{setisupdate(false)}} username1 = {props.username} onpasschange = {logout} mainloader = {mainloader}/>}
    </>
  );
}
