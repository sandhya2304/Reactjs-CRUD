import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from "axios";

function EditUser() {

   const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
   });

   let history = useHistory();
   const {id} = useParams();

   const { name, username, email, phone, website } = user;

   const onInputChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value });
   }

   const onSubmit= async e =>{
       e.preventDefault();
       await axios.put(`http://localhost:3033/users/${id}`,user);
       history.push('/');
   }

   useEffect(() =>{
       loadUser();
   },[]);

   const loadUser = async () =>{
       const result = await axios.get(`http://localhost:3033/users/${id}`);
       setUser(result.data);

   }

    return (
    <div className="container w-50 mx-auto shadow p-5">
        <h1 className="text-center " >Edit User</h1>
        <hr/>
        <form onSubmit={e => onSubmit(e)}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" 
                 placeholder="Enter name" 
                 name="name" 
                 value={name}
                 onChange = {e => onInputChange(e)}
                 />

            </div>

            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" 
                placeholder="Enter username" 
                value={username}
                name="username" 
                onChange = {e => onInputChange(e)}
                />

            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control"  
                placeholder="Email" 
                value={email}
                 onChange = {e => onInputChange(e)}
                 name="email" 
                 />
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control"  
                placeholder="Phone" value={phone}
                 onChange = {e => onInputChange(e)}
                 name="phone"
                 />
            </div>
            
            <div class="form-group">
                <label for="website">Website</label>
                <input type="text" class="form-control"  
                placeholder="website" value={website}
                name="website"
                onChange = {e => onInputChange(e)}
                />
                
            </div>
            <button type="submit" 
                class="btn btn-warning btn-block">
                    Update user
            </button>
        </form>
        </div>
    )
}

export default EditUser;
