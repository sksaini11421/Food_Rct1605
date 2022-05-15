import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllPizzas from '../../actions/pizzaActions';
import Pizza from '../Pizza';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const pizzasstate = useSelector(state => state.getAllPizzasReducers)

    console.log(pizzasstate);
    const {pizzas,error, loading } = pizzasstate;
    useEffect(() => {
        dispatch(getAllPizzas());
    }, [])

    return (
        <>
            <div className='row'>
                {loading ? (<h1>Loading Please Wait.....</h1>) : error ? (
                   <h1>Something Went Wrong</h1>
                ) :

                (
                    pizzas.map(item => {
                        return <div className='col-md-4'>
                            <div>
                                <Pizza item={item} />
                            </div>
                        </div>
                    })
                )}
            </div>
        </>
    )
}

export default HomeScreen