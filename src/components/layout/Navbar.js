import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="/">React User</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

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
            </nav>
        </div>
    )

}

export default Navbar;