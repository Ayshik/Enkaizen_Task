import React from 'react'
import User_footer_dashboard from './User_footer_dashboard';
import User_header_dashboard from './User_header_dashboard';
import User_navbar_dashboard from './User_navbar_dashboard';

const User_dashboard=()=>{
  const user = JSON.parse(localStorage.getItem("user"));
    return(
    
        <div className="hold-transition sidebar-mini layout-fixed">
        <div className="wrapper">
<User_header_dashboard/>
<User_navbar_dashboard/>


<div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              {/* ./col */}
              
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3> ID~{user.username}<sup style={{fontSize: '20px'}} /></h3>
                    <p>My Profile</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-users" />
                  </div>
                  <a href="/Profile" className="small-box-footer">Go<i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
             
            </div>
          </div>
          {/* /.row */}
          {/* Main row */}
          <div className="row">
          </div>
          {/* /.row (main row) */}
        </section></div>{/* /.container-fluid */}
      {/* /.content */}



<User_footer_dashboard/>







        </div>
      </div>
);
}

export default User_dashboard;