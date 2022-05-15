import axios from 'axios'

const getAllPizzas = ()=>async dispatch => {
  dispatch({type:'GET_PIZZAS_REQUEST'})

  try{
    const pizzas =await axios.get('http://localhost:5000/api/get-pizza')
  dispatch({type:'GET_PIZZAS_SUCCESS', payload: pizzas.data })
  }
  catch(error) {
    dispatch({type : 'GET_PIZZAS_FAILED', payload: error})
  }
}

export default getAllPizzas