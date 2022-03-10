import React from 'react'
import Admin_footer_dashboard from './Admin_footer_dashboard';
import Admin_header_dashboard from './Admin_header_dashboard';
import Admin_navbar_dashboard from './Admin_navbar_dashboard';

const Admin_dashboard=()=>{
    return(
    
        <div className="hold-transition sidebar-mini layout-fixed">
        <div className="wrapper">
<Admin_header_dashboard/>
<Admin_navbar_dashboard/>


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
                <div className="small-box bg-dark">
                  <div className="inner">
                    <h3>45<sup style={{fontSize: '20px'}} /></h3>
                    <p>Total Admin</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-shield" />
                  </div>
                  <a href="/Admin_list" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>12<sup style={{fontSize: '20px'}} /></h3>
                    <p>Total Users</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-users" />
                  </div>
                  <a href="/Admin_user_list" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
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



<Admin_footer_dashboard/>







        </div>
      </div>
);
}

export default Admin_dashboard;