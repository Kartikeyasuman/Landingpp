import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid ">
                    <NavLink class="navbar-brand" to="/">


                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-5" >
                                <NavLink class="nav-link" to="/products">Below 299 store</NavLink>
                            </li>
                            <li class="nav-item px-5">
                                <NavLink class="nav-link" to="/about">Best Of Brands</NavLink>
                            </li>
                            <li class="nav-item px-5">
                                <NavLink class="nav-link" to="/contact">Pen Gift Sets</NavLink>
                            </li>
                            <li class="nav-item px-5">
                                <NavLink class="nav-link" to="#">RBL Bank</NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

        </div>





    )
}
export default Navbar;