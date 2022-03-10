import React, { Component } from 'react'

export class Logout extends Component {
    render() {


        const logout=()=>{    
           localStorage.clear();
           var check= {isLoggedIn:"false"};
           localStorage.setItem('check',JSON.stringify(check));
           window.location.href ='/';
        }
        return (
         <div>

<button type="button" onClick={logout} className="btn btn-info btn-block btn-round">Log OUT</button>

         </div>
        )
    }
}

export default Logout
