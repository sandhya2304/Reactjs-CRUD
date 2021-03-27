import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function About() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3033/users");
        setUsers(result.data);
    }

    return (
        <div class="container">
           <div class="row">
             <div class="col-sm-8 ">
             <div className="py-4 ">
                <h1 className="text-center">Company</h1>

                <table class="table table-shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) =>(
                              <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-primary">View</Link> &nbsp;
                                    <Link class="btn btn-outline-primary">Delete</Link>
                                </td>
                               </tr> 
                            ))
                        }
                    </tbody>
                </table>


            </div>
             </div>


    <div class="col-sm-4 bg-warning">
      <p>Sed ut perspiciatis...</p>
    </div>
  </div>
</div>
    )
}

export default About
