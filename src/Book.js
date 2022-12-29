import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const dispatch = useDispatch();

    return (
        <div className='container'>
            <div className="row">
                <div key={book.id} className="card mb-4" style={{ width: "18rem", background: 'linear-gradient(45deg, #D9D9D9 30%, #E6E6E6 90%)' }}>
                <Link to = {`/productView/${book.id}`}>
                <img src={book.photo} className="card-img-top" style={{ height: "300px"}} alt="" />
                </Link>
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text " style={{ fontWeight: "bold", fontSize: "20px", color: "#f50057" }}>{book.price}$</p>
                        <button onClick={() => dispatch(addToCart(book))} className="btn btn-primary d-flex justify-content-center align-items-center" style={{ background: '#1c2331', width: '100%', height: '40px' }}>
                            <span className='m-2'>Add To Cart </span>
                            <BsCartPlusFill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book