import React from 'react'
import Header from './Header'
const Login=()=>{
    return(
    
      <div>
<Header/>
<form className="box" action method="post">
        <h1>Login</h1>
        <input type="text" name="uname" placeholder="Username" required />
        <input type="password" name="psw" placeholder="Password" required />
      
        <input type="submit" name="login" defaultValue="Login" />

        <button id="buttonone" onClick={(e) => {e.preventDefault();window.location.href='/Admin_Dashboard';
      }}>
        Login
      </button>
      </form>
</div>
);
}

export default Login;