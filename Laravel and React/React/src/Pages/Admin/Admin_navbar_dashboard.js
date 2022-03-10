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
             <a href="index.php" className="nav-link <?php echo $dashboard ?>">
               <i className="nav-icon fas fa-tachometer-alt" />
               <p>
                 Dashboard
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="admin.php" className="nav-link <?php echo $admin ?>">
               <i className="nav-icon fas fa-user-shield" />
               <p>
                 Admin
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="employee.php" className="nav-link <?php echo $employee ?>">
               <i className="nav-icon fas fa-users" />
               <p>
                 Employee List
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="laptop.php" className="nav-link <?php echo $laptop ?>">
               <i className="nav-icon fas fa-laptop" />
               <p>
                 Laptop List
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="inventory.php" className="nav-link <?php echo $inventory ?>">
               <i className="nav-icon fas fa-laptop-house" />
               <p>
                 Laptop in Stock
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="allocate.php" className="nav-link <?php echo $allocate ?>">
               <i className="nav-icon fas fa-user-tag" />
               <p>
                 Allocated to Users
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="faulty.php" className="nav-link <?php echo $faulty ?>">
               <i className="nav-icon fas fa-skull-crossbones" />
               <p>
                 Faulty Laptops
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="customize.php" className="nav-link <?php echo $customize ?>">
               <i className="nav-icon fas fa-tools" />
               <p>
                 Customized Laptops
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="invoice.php" className="nav-link <?php echo $invoice ?>">
               <i className="nav-icon fas fa-file-invoice-dollar" />
               <p>
                 Invoice
               </p>
             </a>
           </li>
           <li className="nav-item">
             <a href="history.php" className="nav-link <?php echo $history ?>">
               <i className="nav-icon fas fa-history" />
               <p>
                 User History
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