import React from 'react'

const Admin_header_dashboard=()=>{
    return(
        <div>
        <div className="preloader flex-column justify-content-center align-items-center">
          <img className="animation__shake" src="assets/img/10001.png" alt="IPDC Logo" height={400} width={500} />
        </div>
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="./index.php" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="https://www.ipdcbd.com/" className="nav-link">Official Website</a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Navbar Search */}
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" id="myInput" onkeyup="myFunction()" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* Fullscreen */}
            <li className="nav-item">
              <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>
            {/* /Fullscreen */}
            <li className="nav-item">
              <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                <i className="fas fa-th-large" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-widget="Logout" href="logout.php" role="button">
                <i className="fas fa-sign-out-alt" />
              </a>
            </li>
          </ul>
        </nav>
        {/* /.navbar */}
      </div>
);
}

export default Admin_header_dashboard;