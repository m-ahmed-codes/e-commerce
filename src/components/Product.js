import { Route, Routes } from "react-router-dom";

import Shopaside from "./Shopaside";
import Shopheader from "./Shopheader";


const Product = () => {
    console.log("testing");
    

    return (

        <>

            
           <Shopheader/>
           <Shopaside/>


           


                        
           
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true" /></button>
                        </div>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    {/* Product Slider */}
                                    <div className="product-gallery">
                                        <div className="quickview-slider-active">
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#" />
                                            </div>
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Product slider */}
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="quickview-content">
                                        <h2>Flared Shift Dress</h2>
                                        <div className="quickview-ratting-review">
                                            <div className="quickview-ratting-wrap">
                                                <div className="quickview-ratting">
                                                    <i className="yellow fa fa-star" />
                                                    <i className="yellow fa fa-star" />
                                                    <i className="yellow fa fa-star" />
                                                    <i className="yellow fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <a href="#"> (1 customer review)</a>
                                            </div>
                                            <div className="quickview-stock">
                                                <span><i className="fa fa-check-circle-o" /> in stock</span>
                                            </div>
                                        </div>
                                        <h3>$29.00</h3>
                                        <div className="quickview-peragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                        </div>
                                        <div className="size">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <h5 className="title">Size</h5>
                                                    <select>
                                                        <option selected="selected">s</option>
                                                        <option>m</option>
                                                        <option>l</option>
                                                        <option>xl</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <h5 className="title">Color</h5>
                                                    <select>
                                                        <option selected="selected">orange</option>
                                                        <option>purple</option>
                                                        <option>black</option>
                                                        <option>pink</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quantity">
                                            {/* Input Order */}
                                            <div className="input-group">
                                                <div className="button minus">
                                                    <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                        <i className="ti-minus" />
                                                    </button>
                                                </div>
                                                <input type="text" name="quant[1]" className="input-number" data-min={1} data-max={1000} defaultValue={1} />
                                                <div className="button plus">
                                                    <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                        <i className="ti-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/*/ End Input Order */}
                                        </div>
                                        <div className="add-to-cart">
                                            <a href="#" className="btn">Add to cart</a>
                                            <a href="#" className="btn min"><i className="ti-heart" /></a>
                                            <a href="#" className="btn min"><i className="fa fa-compress" /></a>
                                        </div>
                                        <div className="default-social">
                                            <h4 className="share-now">Share:</h4>
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                                <li><a className="youtube" href="#"><i className="fa fa-pinterest-p" /></a></li>
                                                <li><a className="dribbble" href="#"><i className="fa fa-google-plus" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal end */}
            {/* Start Footer Area */}
            <footer className="footer">
                {/* Footer Top */}
                <div className="footer-top section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer about">
                                    <div className="logo">
                                        <a href="index.html"><img src="images/logo2.png" alt="#" /></a>
                                    </div>
                                    <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                    <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0123 456 789</a></span></p>
                                </div>
                                {/* End Single Widget */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer links">
                                    <h4>Information</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Faq</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                                {/* End Single Widget */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer links">
                                    <h4>Customer Service</h4>
                                    <ul>
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                {/* End Single Widget */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Single Widget */}
                                <div className="single-footer social">
                                    <h4>Get In Tuch</h4>
                                    {/* Single Widget */}
                                    <div className="contact">
                                        <ul>
                                            <li>NO. 342 - London Oxford Street.</li>
                                            <li>012 United Kingdom.</li>
                                            <li>info@eshop.com</li>
                                            <li>+032 3456 7890</li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook" /></a></li>
                                        <li><a href="#"><i className="ti-twitter" /></a></li>
                                        <li><a href="#"><i className="ti-flickr" /></a></li>
                                        <li><a href="#"><i className="ti-instagram" /></a></li>
                                    </ul>
                                </div>
                                {/* End Single Widget */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Top */}
                <div className="copyright">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="left">
                                        <p>Copyright ?? 2020 <a href="http://www.wpthemesgrid.com" target="_blank">Wpthemesgrid</a>  -  All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="right">
                                        <img src="images/payments.png" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* /End Footer Area */}


        </>
    );
}

export default Product;