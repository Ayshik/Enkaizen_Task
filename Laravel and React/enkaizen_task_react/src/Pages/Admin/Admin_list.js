import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Link, useHistory} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Admin_footer_dashboard from './Admin_footer_dashboard';
import Admin_header_dashboard from './Admin_header_dashboard';
import Admin_navbar_dashboard from './Admin_navbar_dashboard';

const Admin_list=()=>{

  const [products, setProducts] = useState([]);
 
    
    
  useEffect(()=>{
      axios.get("http://127.0.0.1:8000/api/admininfo")
      .then(resp=>{
          console.log(resp.data);
          setProducts(resp.data);
      }).catch(err=>{
          console.log(err);
      });
  },[]);


const Delete = (e,id) => {
  e.preventDefault();
  
 

 
    axios.delete(`http://127.0.0.1:8000/api/Delete_admin/${id}`)
    
    .then(resp=>{
      
    toast.error('Deleted', {
      position: "top-center",
      autoClose: 5000,
     
      closeOnClick: true,
     });

       window.location.href ='/Admin_list';

  });
}

      
let [fullname,setFullname] = useState("");
let [username,setUsername] = useState("");
let [phone,setPhone] = useState("");
let [address,setAddress] = useState("");
let [password,setPassword] = useState("");



const Add =()=>{    
         
  var obj = {fullname:fullname, username:username,phone:phone,address:address,password:password};
  axios.post("http://127.0.0.1:8000/api/Addadmin",obj)
  

  .then(resp=>{
      var massage = resp.data;
      console.log(massage);
      if(massage=="Successful")
      {
      toast.success('🦄 User Added', {
          position: "top-center",
          autoClose: 5000,
         
          closeOnClick: true,           
             
      });
      window.location.href = "/Admin_list";
  }
}).catch(err=>{
  console.log(err);
}); 

}

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
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Add Admin
                </button>
                {/* Add User */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Admin</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form >
                          <div className="form-group">
                            <label htmlFor="name">User Name:</label>
                            <input type="name" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter User Name" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="id">Name:</label>
                            <input type="id" className="form-control" value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder="Full Name" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="designation">Phone No:</label>
                            <input type="designation" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="department">Address:</label>
                            <input type="department" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Your Address" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="department">Password:</label>
                            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
                          </div>
                        </form></div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={Add} className="btn btn-primary">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* this is for update */}
                <div className="modal fade" id="updatepanel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Admin Update</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form  method="post">
                          <div className="form-group">
                            <input type="hidden" className="form-control" id="sl" name="sl" placeholder="Enter id" required />
                            <label htmlFor="name">Username:</label>
                            <input type="name" className="form-control" id="username" name="username" placeholder="Enter User Name" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="id">Name:</label>
                            <input type="name" className="form-control" name="name" placeholder="Enter name" id="name" required />
                          </div>
                         
                          <div className="form-group">
                            <label htmlFor="department">Mobile:</label>
                            <input type="mobile" className="form-control" placeholder="Enter Mobile Number" name="mobile" id="mobile" required />
                          </div>
                          <div className="form-group">
                           
                            <label htmlFor="name">Address:</label>
                            <input type="name" className="form-control" id="address" name="address" placeholder="Enter Address" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="department">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter Password" name="password" id="password" required />
                          </div>
                        </form></div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" name="updateadmin" className="btn btn-primary">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End update */}
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                  <li className="breadcrumb-item active">Admin</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <table id="mytable" className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Phone no</th>
                  <th scope="col">Address</th>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
              {
                
                products.map(p=>(

                <tr key={p.id}>
                  <td>{p.id}</td>
                <td>{p.Username}</td>
                <td>{p.Fullname}</td>
                <td>{p.Phoneno}</td>
                <td>{p.Address}</td>
               
               <td><Link to={`Update_admin/${p.id}`} className="btn btn-success btn-sm">Edit</Link></td> 

      <td className="align-middle">
                          <button type="button" onClick={(e) => Delete(e, p.id)} className="btn btn-info btn-block btn-round">Delete</button>
                          </td>
            
                </tr>
                
                  
                ))
                    }
                
                </tbody>
            </table>
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>

<Admin_footer_dashboard/>







        </div>
       
        <ToastContainer />
      </div>
      
);
}

export default Admin_list;