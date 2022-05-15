import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
    const cartstate = useSelector(state=>state.cartReducer);
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
                <div className="container-fluid">
                    <div className="navbar-brand">SAINI PIZZA</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <div className="nav-link" >Login</div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/cart'>Cart {cartstate.cartItems.length}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar