import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, clearCart, addToCart, decreaseItemQuantity, getCartShown} from '../store/cartSlice';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {

    const {cart} = useSelector(state => state.cartStore)
    const dispatch = useDispatch();
    const total = cart.reduce((acc, product)=>{
    acc += product.price * product.quantity
    return acc
    },0)
    const handleIncreaseQuantity = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    const handleDecreaseQuantity = (cartItem) => {
        dispatch(decreaseItemQuantity(cartItem))
    }
    return (
        <div className="container">
            <h1 className='mt-4'> Your Shopping Cart</h1>
            <hr />
            {cart.length > 0 ?
                <div className="shoppingCart">
                    <table className="table  my-5" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col"> Quantity</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(cartItem => (
                                <tr key={cartItem.id}>
                                    <th scope="row">{cartItem.id}</th>
                                    <td>{cartItem.title}</td>
                                    <td><img src={cartItem.photo} alt="" style={{ width: "100px", height: "100px" }} /></td>
                                    <td >{cartItem.price}$</td>
                                    <td style={{ fontSize: "33px" }}>
                                    <button className='border-0 bg-white' onClick={() => handleDecreaseQuantity(cartItem)}> - </button>
                                    {cartItem.quantity}
                                    <button className='border-0 bg-white' onClick={() => handleIncreaseQuantity(cartItem)}> + </button>
                                    </td>
                                    <td style={{fontWeight: "bold" }}>{cartItem.price * cartItem.quantity}$</td>
                                    <td><button className='btn btn-danger' onClick={() => dispatch(deleteItem(cartItem))}>Delete</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className="d-flex justify-content-around mb-4">
                        <div className="subtotal" style={{ fontSize: "30px", }}>Subtotal : <span style={{ color: "red", fontWeight: "bold" }}>{total}$</span></div>
                        <div>
                            <button className='btn btn-danger' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                            <Link to="/checkout" className=" btn btn-secondary m-2"  >CheckOut</Link>
                        </div>
                    </div>
                </div>
                :
                <div>You have no items in your shopping cart, <Link onClick={()=>dispatch(getCartShown())} className='text-decoration-none' to="/">start adding some!</Link></div>
            }
        </div>
    )
}

export default ShoppingCart