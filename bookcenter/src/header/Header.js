import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCartFill } from "react-icons/bs"
import "./header.css"
import { getCartHidden, getCartShown } from '../store/cartSlice';


const Header = () => {
    const { cart, isCartVisible } = useSelector(state => state.cartStore);

    const dispatch = useDispatch()

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg position-fixed w-100 top-0 " style={{ backgroundColor: '#1c2331', zIndex: "3", marginBottom: "15px" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand clr-wt" onClick={()=>dispatch(getCartShown())}  to="/">BOOK-IT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <Link className= {isCartVisible ? "cart" : "cartHidden"} to="/cart" onClick={()=>dispatch(getCartHidden())}>
                    <BsFillCartFill className='clr-wt' />
                    <span className={cart.length > 0 && "cart-cir"}>{cart.length > 0 && cart.length}</span>
                </Link>

            </div>
        </nav>
        </Fragment >
    );

}

export default Header