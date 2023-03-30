import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { addCart } from '../redux/action';

function Product() {
    const {id}=useParams();
    const [product,setProduct]= useState([]);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    const addproduct = (product)=>{
        dispatch(addCart(product))
    }
    
    useEffect(() =>{
        const getProducts = async () => {
                setLoading(true)
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const item = await response.json();
                console.log(item);
                setProduct(item);
                setLoading(false)
                
            }
        getProducts();
    },[] )

    const Loading = () => {
        return (
            <>
                Loading...
            </>)
    }
    const Showproduct = ()=>{
        return(
            <>
            <div className='row mt-5'>
           <div className="col-md-5 ms-0 me-2">
             <img src={product.image} alt="image" height={"400px"} width={"400px"} /> 
             </div>
             <div className="col-md-5 ms-5">
                        <h5 className="text-uppercase text-black-50">{product.category}</h5>
                        <h1 className="">${product.title}</h1>
                        <p className="lead fw-bolder">
                            Rating {product.rating && product.rating.rate} 
                           <i className="fa fa-star ms-2"></i>
                        </p>
                        <div className="display-6 fw-bold my-4">$ {product.price}</div>
                        <p className="lead">{product.description}</p>
                        <button className="btn btn-outline-dark me-2" onClick={()=>{addproduct(product)}}>Add to Cart</button>
                        <NavLink className="btn btn-secondary" to={"/cart"}>Go to Cart</NavLink>
                    </div>
                  </div>
            </>
        )
    }
  return (
    <>
<div className="container-fluid">
{loading ? <Loading /> : <Showproduct/>}
</div>
    </>
  )
}

export default Product