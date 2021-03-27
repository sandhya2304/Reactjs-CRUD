import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="/">Company</a>
                

                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/">
                                Home </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/about">
                                About </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to="/contact">
                                Contact </NavLink>
                        </li>
                        
                    </ul>
                </div>
                
                <Link to="/addUser" className="btn bg-white mr-5">
                     Add User
                </Link>

            </nav>

            <hr className="mt-1" />
            </div>
       
    )

}

export default Navbar;