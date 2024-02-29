import React from "react";
import Products from "./Product";
import Navbar from "./Navbar";
const Home = () => {
    return (

        <div className="hero" >
            <div class="card text-bg-dark">
                <img src="hi.jpg" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay">
                    <h5 className="card-title">BEST OF BRANDS</h5>

                </div>
            </div>
            <Navbar></Navbar>
            <hr />

            <Products></Products>
        </div>
    );
}
export default Home