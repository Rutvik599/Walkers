import { useState } from 'react';
import './App.css';
import LoadingBar from 'react-top-loading-bar';
import Login from './Comp/Login';
import Navbar from './Comp/Navbar';
import Signin from './Comp/Signin';
import Body from './Comp/Body';


function App() {
  const [username,setusername] = useState('');
  const [islogin,setislogin] = useState(true);
  const [issignin,setissignin] = useState(false);
  const [progress, setProgress] = useState(0)
  const [searchtext,setSearch] = useState('');
  const setlogin = (value) =>{
    setislogin(value);
  }
  const setSignin = (value)=>{
    setissignin(value)
  }
  const loader = (value) =>{
    setProgress(value);
  }
  const setUser = (value) =>{
    setusername(value);
  }
  const setSearch1 = (value) =>{
    setSearch(value);
  }
  return (
    <>
    <LoadingBar
        color='#78A4F9'
        height={1.5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    {islogin&&<Login setlogin = {setlogin} setSignin ={setSignin}  loader = {loader} setUser = {setUser}/>}
    {issignin&&<Signin  loader = {loader} setlogin = {setlogin} setSignin ={setSignin}/>}
    {username && !islogin&&<Navbar username={username} setSearch1 = {setSearch1} setlogin={setlogin} loader = {loader}/>
    } <br/>
    {!searchtext && !islogin&& username&&<Body/>}
    </>
  );
}

export default App;
