import React from 'react'
import { useSelector, useDispatch} from 'react-redux'


const CartScreen = () => {
    const cartstate =useSelector(state=>state.cartReducer)

    const cartItems = cartstate.cartItems;
    console.log(cartItems);
  return (
    <div>
        <div className="row justify-content-center">
               <div className='col-md-6'>
                    <h2>
                    My Cart
                    </h2>
                        {/* {cartItems.length} */}
                        {cartItems.map((items) => {
                            const list = (
                                <>
                                <div className='d-flex'>
                                    <div className='text-left m-1 w-100'>
                                        <h5>{items.name} [{items.varient}]</h5>
                                        <h5>Price : {items.quantity} * {items.prices[0][items.varient]} = {items.price}</h5>
                                        <h5 style={{display:'inline'}}>Quantity : </h5>
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        <b>{items.quantity}</b>
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                        <hr />
                                    </div>

                                    <div className='m-1 w-100'>
                                        <img src={items.image} style={{height:'80px',width:'80px'}}  />
                                    </div>

                                    <div className='m-1 w-100'>
                                    <i className="fa fa-trash mt-5" aria-hidden="true"></i>

                                    </div>
                                </div>
                                </>
                            )
                            return list;
                        })}
                        
                    
               </div> 
               <div className='col-md-4'>

               </div>

        </div>
    </div>
  )
}

export default CartScreen