import React from 'react'

const Header=()=>{
    return(
    
      <div>

        <div className="menu">
          <div className="leftmenu">
            <h3><a href="/">Enkaizen Task</a></h3>
          </div>
          <div className="rightmenu">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="https://www.enkaizen.com/web-development/" target="_blank">WEBSITE</a></li>
             
              <li><a href="https://www.enkaizen.com/latest-post/" target="_blank" >BLOGS</a></li>
              <li>
                <a href="https://www.enkaizen.com/news/" target="_blank" >NEWS</a>
              </li>
            </ul>
          </div>
        </div>
 
     
</div>
);
}

export default Header;