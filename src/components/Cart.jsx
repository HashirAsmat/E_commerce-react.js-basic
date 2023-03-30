import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delCart, addCart} from '../redux/action/index'
import handleCart from '../redux/reducer/handleCart'

function Cart() {
    const state = useSelector((state)=>state.handleCart)
    const dispatch = useDispatch();
    
    
    const cartItems = (cartItem)=>{

      return(  <>
       <div className='row mt-5 offset-2'>
           <div className="col-md-3 ms-0 me-2">
             <img src={cartItem.image} alt="image" height={"200px"} width={"200px"} /> 
             </div>
             <div className="col-md-3 ms-5">
                        <h5 className="text-uppercase text-black-10">{cartItem.category}</h5>
                        <h1 className="text-black-10 " style={{fontSize:"20px"}}>${cartItem.title}</h1>
                        <div className="display-6 fw-bold my-4" style={{fontSize:"20px"}}>$ {cartItem.price}</div>
                        <button className="btn btn-outline-dark" >Delete item</button>
                    </div>
                  </div>
                  <hr />
      </>)
    }
  return (
    <>
    {state.length !==0 && state.map(cartItems)}
    </>
  )
}

export default Cart