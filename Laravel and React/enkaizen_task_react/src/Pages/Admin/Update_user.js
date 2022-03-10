import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Update_user=()=>{


 
    const {id} = useParams();
  
    const history = useHistory();
    const [Products, setProducts] = useState({
     
      Fullname: "",
      Phoneno: "",
      Address: "",
     
    });
    const {  Fullname, Phoneno, Address } = Products;
    const onInputChange = e => {
      setProducts({ ...Products, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadUser();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/Update_user/${id}`, Products);
    // history.push("/Admin_user_list");
     window.location.href = "/Admin_user_list";
    };
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8000/api/Edit_user/${id}`);
      setProducts(result.data);
    };
    return(
    
      <div>
        
<form className="box" onSubmit={e => onSubmit(e)}>
        <h1>User Update</h1>
      
        <input type="text" name="Fullname" value={Fullname} onChange={e => onInputChange(e)} placeholder="Full Name" />
        <input type="text" name="Phoneno" value={Phoneno} onChange={e => onInputChange(e)} placeholder="Phone Number" />
        
        <input type="text"name="Address" value={Address} onChange={e => onInputChange(e)} placeholder="Your Address" />
       
        <input type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2"  defaultValue="Update" />
      </form>
      <ToastContainer />
</div>
);
}

export default Update_user;