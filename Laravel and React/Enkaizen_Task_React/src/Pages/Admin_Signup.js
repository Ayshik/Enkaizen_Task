import React from 'react'
import Header from './Header'
const Admin_Signup=()=>{
    return(
    
      <div>
          <Header/>
<form className="box" action method="post">
        <h1>Admin Sign-Up</h1>
        <input type="text" name="ouname" placeholder="User Name" />
        <input type="text" name="pname" placeholder="Full Name" />
        <input type="text" name="ophone" placeholder="Phone Number" />
        
        <input type="text" name="oaddress" placeholder="Your Address" />
        <input type="password" name="ocpass" placeholder="Password" />
        <input type="submit" name="Adminsignup" defaultValue="Sign-Up" />
      </form>
</div>
);
}

export default Admin_Signup;