import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
// import Jeans from "./Jeans";
// import Jeans from "./Jeans";
import Jeans from '../clothes/Jeans'
import Shirts from "../clothes/Shirts";
import Shoes from "../clothes/Shoes";
import Tshirts from "../clothes/Tshirts";
import Watches from "../clothes/Watches";



const Shopaside = () => {
    return ( 
        <>
         <section className="product-area shop-sidebar shop section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="shop-sidebar">
                                {/* Single Widget */}
                                <div className="single-widget category">
                                    <h3 className="title">Categories</h3>
                                    <ul className="categor-list">
                                        <li><Link to="/products/shirts">Shirts</Link></li>
                                        <li><Link to="/products/tshirts">T-shirts</Link></li>
                                        <li><Link to="/products/jeans">jeans</Link></li>
                                        <li><Link to="/products/shoes">Shoes</Link></li>
                                        <li><Link to="/products/watches">Watches</Link></li>
                                        {/* <li><a href="#">kitwears</a></li>
                                        <li><a href="#">accessories</a></li> */}
                                
                                    </ul>
                                </div>
                                {/*/ End Single Widget */}
                                {/* Shop By Price */}
                                <div className="single-widget range">
                                    <h3 className="title">Shop by Price</h3>
                                    <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <div id="slider-range" />
                                            <div className="price_slider_amount">
                                                <div className="label-input">
                                                    <span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="check-box-list">
                                        <li>
                                            <label className="checkbox-inline" htmlFor={1}><input name="news" id={1} type="checkbox" />$20 - $50<span className="count">(3)</span></label>
                                        </li>
                                        <li>
                                            <label className="checkbox-inline" htmlFor={2}><input name="news" id={2} type="checkbox" />$50 - $100<span className="count">(5)</span></label>
                                        </li>
                                        <li>
                                            <label className="checkbox-inline" htmlFor={3}><input name="news" id={3} type="checkbox" />$100 - $250<span className="count">(8)</span></label>
                                        </li>
                                    </ul>
                                </div>
                                {/*/ End Shop By Price */}
                               
                            </div>
                        </div>


                        <Routes>
                            <Route path='//shirts' element={<Shirts/>} ></Route>
                            <Route path="//tshirts" element={<Tshirts/>}></Route>
                            <Route path="//jeans" element={<Jeans/>}></Route>
                            <Route path="//watches" element={<Watches/>}></Route>
                            <Route path="//shoes" element={<Shoes/>}></Route>
                        </Routes>


                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Shopaside;