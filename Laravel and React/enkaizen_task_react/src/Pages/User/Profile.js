import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


const Profile=()=>{


  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const [Products, setProducts] = useState({
    Fullname: "",
    Phoneno: "",
    Address: "",
    Password: "",
   
  });
  const { Fullname, Phoneno, Address, Password} = Products;
  const onInputChange = (e) => {
    setProducts({ ...Products, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8000/api/Update_user_profile/${user.username}`,
      Products
    );
    toast.success("Update Done", {
      position: "top-center",
      autoClose: 5000,

      closeOnClick: true,
    });
    window.location.href = "/User_Dashboard";
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8000/api/User_profile/${user.username}`
    );
    setProducts(result.data);
  };
    return(
    
      <div>
        
<form className="box" onSubmit={e => onSubmit(e)}>
        <h1>My Profile</h1>
      
        <input type="text" name="Fullname" value={Fullname} onChange={e => onInputChange(e)} placeholder="Full Name" />
        <input type="text" name="Phoneno" value={Phoneno} onChange={e => onInputChange(e)} placeholder="Phone Number" />
        
        <input type="text"name="Address" value={Address} onChange={e => onInputChange(e)} placeholder="Your Address" />
        <input type="password"name="Password" value={Password} onChange={e => onInputChange(e)} placeholder="Your Password" />
       
        <input type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2"  defaultValue="Update" />
      </form>
      <ToastContainer />
</div>
);
}

export default Profile;