<template>

<div class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

<Admin_header/>

<Admin_navbar/>


<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          
          <!-- ./col -->

          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-dark">
              <div class="inner">
                <h3>23<sup style="font-size: 20px"></sup></h3>

                <p>Total Admin</p>
              </div>
              <div class="icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <a href="admin.php" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>


          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>55<sup style="font-size: 20px"></sup></h3>

                <p>Total Employees</p>
              </div>
              <div class="icon">
                <i class="fas fa-users"></i>
              </div>
              <a href="employee.php" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
         
            <!-- Small Boxes End --->


        



          
          <!-- ./col -->
        </div>
		</div>
        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
        </div>
        
      </div><!-- /.container-fluid -->
</div>

 <Admin_footer/>
<aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
 </div>
  
    </div>
</template>

<script>
import Admin_header from './Admin_header.vue'
import Admin_footer from './Admin_footer.vue'
import Admin_navbar from './Admin_navbar.vue'

export default {
   name:'Admin_panel',
   components: {
    Admin_header,
 Admin_footer,
 Admin_navbar

  }
}
</script>
