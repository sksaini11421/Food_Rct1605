const addToCart = (pizza, quantity, varient)=>(dispatch, getState)=>
 {
  var cartItem = {
    name : pizza.name,
    _id : pizza.id,
    image: pizza.image,
    varient : varient,
    quantity : quantity,
    prices : pizza.price ,
    price : pizza.price[0][varient]* quantity
  }

  dispatch({type:'ADD_TO_CART', payload : cartItem})

  const cartItems = getState().cartReducer.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
  
}

export default addToCart