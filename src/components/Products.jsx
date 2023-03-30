import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';



function Products() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(() => {
        console.log("useEffect function....")

        const getProducts = async () => {
            console.log("product function")
            try {
                setLoading(true)
                const response = await fetch("https://fakestoreapi.com/products");
                // const DataVar= await response.clone().json();
                // const FilterVar = await response.json();
                if (componentMounted) {
                    setData(await response.clone().json()); 
                    setFilter(await response.json());
                    console.log(data);
                    console.log(filter);
                    setLoading(false);
                }
            }
            catch (err) {
                console.log(err.message);
            }
        }
        getProducts();
    }, [])


    const Loading = () => {
        return (
            <>
                Loading...
            </>)
    }
    const filterItmes =  (cat)=>{
        const filtered_Data = data.filter((x)=> x.category === cat )
            setFilter(filtered_Data);
        
    }
    const Showproducts = () => {
        return (
            <>    
                    <div className="buttons d-flex justify-content-center mb-5">
                    <button className="btn btn-outline-dark ms-2" onClick={()=>{setFilter(data)}}>
                        All
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>{filterItmes("men's clothing")}}>
                        Men's Clothings
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>{filterItmes("women's clothing")}}>
                        Women's Clothings
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>{filterItmes("electronics")}}>
                        Electronic's
                    </button>
                    <button className="btn btn-outline-dark ms-2" onClick={()=>{filterItmes("jewelery")}}>
                        jewelery
                    </button>
                </div>
               {filter.map((item)=>{
                return(
                    <>
                   <div className="card text-center p-4 card-size" key={item.id} style={{width:"18rem"}}>
                    <img className="card-img-top img-size" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title.substring(0,20)}</h5>
                        <p className="card-text">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-secondary">Buy Now</NavLink>
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
            
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="display-6 fw-bolder text-center">
                            Lastest product
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">

                    {loading ? <Loading /> : <Showproducts />}

                </div>
            </div>
        </div>
    )
}

export default Products;


