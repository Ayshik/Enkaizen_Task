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
                    <h3>{/*?php echo $ad ; ?*/}<sup style={{fontSize: '20px'}} /></h3>
                    <p>Total Admin</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-shield" />
                  </div>
                  <a href="admin.php" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{/*?php echo $Ao ; ?*/}<sup style={{fontSize: '20px'}} /></h3>
                    <p>Total Employees</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-users" />
                  </div>
                  <a href="employee.php" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{/*?php echo $lt ; ?*/}</h3>
                    <p>Total Laptops</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-laptop" />
                  </div>
                  <a href="laptop.php" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{/*?php echo $lnv ; ?*/}</h3>
                    <p>Laptops In Stock</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-laptop-house" />
                  </div>
                  <a href="inventory.php" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
                {/* Again Smaill Boxes -*/}
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>{/*?php echo $fal ; ?*/}<sup style={{fontSize: '20px'}} /></h3>
                    <p>Faulty Laptops</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-skull-crossbones" />
                  </div>
                  <a href="faulty.php" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-primary ">
                  <div className="inner">
                    <h3>{/*?php echo $cus ; ?*/}</h3>
                    <p>Customized Laptops</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-tools" />
                  </div>
                  <a href="customize.php" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-secondary">
                  <div className="inner">
                    <h3>{/*?php echo $book ; ?*/}</h3>
                    <p>Laptops are Allocated to Users</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-tag" />
                  </div>
                  <a href="allocate.php" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* Small Boxes End -*/}
              {/* ./col */}
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