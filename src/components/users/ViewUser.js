import React, { useEffect, useState } from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from "axios";

function ViewUser() {

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
   });

   const {id} = useParams();

   useEffect(() =>{
      loadUser();
     },[]);

   const loadUser = async () =>{
    const result = await axios.get(`http://localhost:3033/users/${id}`);
      setUser(result.data);

     }


    return (
        <div className="container py-4">
             <Link className ="btn btn-primary" to="/" >
                  
                  back to Home

             </Link>
             <hr />
             <h1 className="display-4">{id}</h1>

             <ul className="list-group w-50 ">

                 <li className="list-group-item">name:{user.name}</li>
                 <li className="list-group-item">username:{user.username}</li>
                 <li className="list-group-item">email:{user.email}</li>
                 <li className="list-group-item">phone:{user.phone}</li>

                 <li className="list-group-item">website:{user.website}</li>
                 <li></li>
                 
             </ul>

            
        </div>
    )
}

export default ViewUser
