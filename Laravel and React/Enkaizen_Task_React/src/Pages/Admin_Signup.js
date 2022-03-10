import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'

const Admin_Signup=()=>{
      
  let [fullname,setFullname] = useState("");
  let [username,setUsername] = useState("");
  let [phone,setPhone] = useState("");
  let [address,setAddress] = useState("");
  let [password,setPassword] = useState("");


  
  const Add =()=>{    
           
    var obj = {fullname:fullname, username:username,phone:phone,address:address,password:password};
    axios.post("http://127.0.0.1:8000/api/Addadmin",obj)
    

    .then(resp=>{
        var massage = resp.data;
        console.log(massage);
        if(massage=="Successful")
        {
        toast.success('🦄 Registration Successfull', {
            position: "top-center",
            autoClose: 5000,
           
            closeOnClick: true,           
               
        });
    }
}).catch(err=>{
    console.log(err);
}); 

}
    return(
    
      <div>
          <Header/>
<form className="box" >
        <h1>Admin Sign-Up</h1>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="User Name" />
        <input type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder="Full Name" />
        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" />
        
        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Your Address" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <input type="button" className="btn bg-gradient-primary w-100 my-4 mb-2" onClick={Add} defaultValue="Sign-Up" />
      </form>
      <ToastContainer />
</div>
);
}

export default Admin_Signup;