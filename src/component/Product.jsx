import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>

            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.catergory === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>ALL</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Men's clothing")}>Men's Cloathing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Women's clothing")}>Women's Cloathing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title.substring(0, 12)} />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">Card title</h5>
                                        <p class="card-text lead fw-bold">${product.price}.</p>
                                        <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>


        )





    }
    return (


        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );

}
export default Products;