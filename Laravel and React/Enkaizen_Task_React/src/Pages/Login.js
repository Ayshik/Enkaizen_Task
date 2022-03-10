
import Header from './Header'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login=()=>{


  let [name, setName] = useState("");
  let [password, setPass] = useState("");
  const loginSubmit = () => {
    //alert(name+" "+password);
    var obj = { username: name, password: password };
    axios
      .post("http://127.0.0.1:8000/api/login", obj)
      .then((resp) => {
        var token = resp.data;
        var user = {
          username: token.Username,
          fullname: token.Fullname,
          type: token.Type,
        };
        var check = { isLoggedIn: "true" };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("check", JSON.stringify(check));
        console.log(localStorage.getItem("user"));
        if (user.type == "Admin") {
          window.location.href = "/Admin_Dashboard";
        } else if (user.type == "User") {
          window.location.href = "/User_Dashboard";
        } 
         else {
          toast.error("Please check your username Password", {
            position: "top-center",
            autoClose: 5000,

            closeOnClick: true,
          });
          localStorage.clear();
          var check = { isLoggedIn: "false" };
          localStorage.setItem("check", JSON.stringify(check));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return(
    
      <div>
<Header/>
<form className="box" >
        <h1>Login</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPass(e.target.value)} placeholder="Password" required />
      
        <button
                  type="button"
                  onClick={loginSubmit}
                  className="btn btn-info btn-block btn-round"
                >
                  Login
                </button>

      
      </form>
      <ToastContainer />
</div>
);
}

export default Login;