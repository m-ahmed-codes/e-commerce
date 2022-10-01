import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import {ACTIONS} from '../context/Context'



const Navbar = () => {

    const {state:{cart,like},dispatch} = CartState()

    const [total, settotal] = useState()

    useEffect(() => {
        settotal(cart.reduce((acc,curr)=> acc + Number(curr.price)*curr.qty ,0 ))
      
    }, [cart])
    
    

    return (
        <>
        <header class="header shop">
            {/* Topbar */}
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12">
                            {/* Top Left */}
                            <div className="top-left">
                                <ul className="list-main">
                                    <li><i className="ti-headphone-alt" /> +060 (800) 801-582</li>
                                    <li><i className="ti-email" /> support@shophub.com</li>
                                </ul>
                            </div>
                            {/*/ End Top Left */}
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            {/* Top Right */}
                            <div className="right-content">
                                <ul className="list-main">
                                    <li><i className="ti-location-pin" /> Store location</li>
                                    <li><i className="ti-alarm-clock" /> <a href="#">Daily deal</a></li>
                                    <li><i className="ti-user" /> <a href="#">My account</a></li>
                                    <li><i className="ti-power-off" /><a href="login.html#">Login</a></li>
                                </ul>
                            </div>
                            {/* End Top Right */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Topbar */}
            <div className="middle-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12">
                            {/* Logo */}
                            <div className="logo">
                                <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                            </div>
                            {/*/ End Logo */}
                            {/* Search Form */}
                            <div className="search-top">
                                <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                                {/* Search Form */}
                                <div className="search-top">
                                    <form className="search-form">
                                        <input type="text" placeholder="Search here..." name="search" />
                                        <button value="search" type="submit"><i className="ti-search" /></button>
                                    </form>
                                </div>
                                {/*/ End Search Form */}
                            </div>
                            {/*/ End Search Form */}
                            <div className="mobile-nav" />
                        </div>
                        <div className="col-lg-8 col-md-7 col-12">
                            <div className="search-bar-top">
                                <div className="search-bar">
                                    {/* <select>
                                        <option selected="selected">All Category</option>
                                        <option>watch</option>
                                        <option>mobile</option>
                                        <option>kid’s item</option>
                                    </select> */}
                                    <form>
                                        <input name="search" placeholder="Search Products Here....." type="search" />
                                        <button className="btnn"><i className="ti-search" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12">
                            <div className="right-bar">
                                {/* Search Form */}
                                <div className="sinlge-bar">
                                    <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" />{like.length}</a>
                                </div>
                                <div className="sinlge-bar">
                                    <Link to="/dashboard" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></Link>
                                </div>
                                <div className="sinlge-bar shopping">
                                    <a href="#" className="single-icon"><i className="ti-bag" /> <span className="total-count">{cart.length}</span></a>



                                    {/* Shopping Item */}
                                    <div className="shopping-item">
                                        <div className="dropdown-cart-header">
                                            <span>{cart.length} Items</span>
                                            <Link to="/view-cart">View Cart</Link>
                                        </div>


                                        <ul className="shopping-list">
                                        {cart.map((viewCart)=>(
                                            <li>
                                                <a href="#" className="remove" title="Remove this item" onClick={()=>{dispatch({type:ACTIONS.REMOVE_CART,payload:{id:viewCart.id}})}} ><i className="fa fa-remove" /></a>
                                                <a className="cart-img" href="#"><img src={viewCart.image} alt="#" /></a>
                                                <h4><a href="#">{viewCart.description}</a></h4>
                                                <p className="quantity">{viewCart.qty}x - <span className="amount">Rs.{viewCart.price }</span></p>
                                            </li>

                                        ))}
                                        </ul>
                                         
                                        <div className="bottom">
                                            <div className="total">
                                                <span>Total</span>
                                                <span className="total-amount">Rs.{total}</span>
                                            </div>
                                            <a href="checkout.html" className="btn animate">Checkout</a>
                                        </div>
                                    </div>
                                    {/*/ End Shopping Item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>

        </>



    );
}

export default Navbar;