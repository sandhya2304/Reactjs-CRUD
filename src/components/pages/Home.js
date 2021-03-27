import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3033/users");
        setUsers(result.data);
    }

    return (
        <div className="container w-50 ">
            <div className="py-4 ">
                <h1>Contacts</h1>

                <table class="table table-shadow table-hover">
                    <thead bgcolor="whitesmoke">
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
                                    <Link class="btn btn-outline-primary btn-sm">View</Link> &nbsp;
                                    <Link class="btn btn-outline-success btn-sm">Edit</Link> &nbsp;
                                    <Link class="btn btn-outline-warning btn-sm mt-2">Delete</Link>
                                </td>
                               </tr> 
                            ))
                        }
                    </tbody>
                </table>


            </div>

            

        </div>
    )
}

export default Home;
