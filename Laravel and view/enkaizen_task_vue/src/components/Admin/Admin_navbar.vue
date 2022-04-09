<template>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
   <router-link to="/Admin_panel" class="brand-link">
      <img src="assets/img/10001.png" alt="IPDC Logo" class="brand-image">
      <span class="brand-text font-weight-light">IPDC Finance</span>
               </router-link>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar"  type="text" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
           <router-link to="index.php" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
             
              <p>
                Dashboard
              
              </p>
           </router-link>
           
          </li>
          <li class="nav-item">
           <router-link to="admin.php" class="nav-link">
              <i class="nav-icon fas fa-user-shield"></i>
              <p>
                Admin
                
              </p>
           </router-link>
          </li>
          <li class="nav-item">
           <router-link to="employee.php" class="nav-link ">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Employee List
                
              </p>
           </router-link>
          </li>
        </ul>

      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
 
</template>


<script>


export default {
    name:'Admin_navbar',
}
</script>
