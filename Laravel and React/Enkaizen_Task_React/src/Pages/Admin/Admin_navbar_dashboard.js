import React from 'react'

const Admin_navbar_dashboard=()=>{
    return(
        <div>
     {/* Main Sidebar Container */}
     <aside className="main-sidebar sidebar-dark-primary elevation-4">
     {/* Brand Logo */}
     <a href="index.php" className="brand-link">
       <img src="assets/img/10001.png" alt="IPDC Logo" className="brand-image" />
       <span className="brand-text font-weight-light">IPDC Finance</span>
     </a>
     {/* Sidebar */}
     <div className="sidebar">
       {/* SidebarSearch Form */}
       <div className="form-inline">
         <div className="input-group" data-widget="sidebar-search">
           <input className="form-control form-control-sidebar" type="text" placeholder="Search" aria-label="Search" />
           <div className="input-group-append">
             <button className="btn btn-sidebar">
               <i className="fas fa-search fa-fw" />
             </button>
           </div>
         </div>
       </div>
       {/* Sidebar Menu */}
       <nav className="mt-2">
         <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
           {/* Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library */}
           <li className="nav-item menu-open">
             <a href="/Admin_dashboard" className="nav-link active">
               <i className="nav-icon fas fa-tachometer-alt" />
               <p>
                 Dashboard
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="/Admin_list" className="nav-link <?php echo $admin ?>">
               <i className="nav-icon fas fa-user-shield" />
               <p>
                 Admin List
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="/Admin_user_list" className="nav-link <?php echo $employee ?>">
               <i className="nav-icon fas fa-users" />
               <p>
                 User List
               </p>
             </a>
           </li>
          
         </ul></nav>
       {/* /.sidebar-menu */}
     </div>
     {/* /.sidebar */}
   </aside>
     </div>
);
}

export default Admin_navbar_dashboard;