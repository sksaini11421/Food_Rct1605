import { Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import addToCart from '../actions/cartActions';


const Pizza = ({item} ) => {
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState('small');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    function addtoCart()
    {
        dispatch(addToCart(item , quantity , variant))
    }
    console.log(item.price);
    return (
        <>
            <div style={{ margin: '60px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
                <div onClick={handleShow}>
                    <h1>
                        {item.name}
                    </h1>
                    <img src={item.image} className='img-fluid' width={"450px"} height={"250px"} />

                </div>
                <div className='d-flex'>

                    <div className="w-100 m-1">
                        <span>Variants</span>
                        <div>

                            <select className='form-control' value={variant} onChange={(e) => { setVariant(e.target.value) }}>
                                {item.varients.map((variant, i) => {
                                    return <option key={i} value={variant}>{variant}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="w-100 m-1">
                        <span>Quantity</span>
                        <div>
                            <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                {
                                    [...Array(10).keys()].map((x, i) => {
                                        return <option key={i} value={i + 1}>{i + 1}</option>
                                    })
                                }
                            </select>
                        </div>

                    </div>
                </div>

                <div className='d-flex'>
                    <div className='m-1 w-100'>
                        <h4 className='mt-1'>Price : {item.price[0][variant] * [quantity]} Rs/</h4>
                    </div>

                    <div className='m-1 w-100'>
                        <button className='btn btn-danger' onClick={addtoCart}>ADD TO CART</button>
                    </div>
                </div>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{item.name}</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <img src={item.image} className="img-fluid" style={{height:"200px" , width:"350px"}} />
                        <p>{item.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Pizza