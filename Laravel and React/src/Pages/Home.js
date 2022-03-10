import React from 'react'
import Header from './Header'
const Home=()=>{
    return(
    
      <div>
<div className="bgimage">
<Header/>
        <div className="text">
        <h3>Laravel • Api • React</h3>
        <h1>~Knowledge is power~</h1>
        <h2>Stay Home &lt;|&gt; Stay Safe</h2>
          <button id="buttonone" onClick={(e) => {e.preventDefault();window.location.href='/Login';
      }}>
        Login
      </button>
          <div className="dropdown">
            <button className="buttontwo">
              Sign-Up </button>
            <div>
              <a href="/Admin_signup">As ADMIN</a>
              <a href="/User_signup">AS User</a>
            </div>
          </div>
        </div>
      </div>
</div>
);
}

export default Home;