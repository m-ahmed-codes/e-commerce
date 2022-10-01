import { useEffect } from "react";
import { useState } from "react";
// import useFetch from "../hooks/useFetch";
const Shirts = () => {
    
   let [data,setData]=useState(null)
   let [error,setError]=useState(null)
   let [isPending,setIsPending]=useState(true)

   useEffect(()=>{
        fetch("http://localhost:8000/clothing")
        .then((response)=>{
            // console.log(response);
            if (!response.ok) {
                throw Error ("Data is not loaded in shirts")
            }
            return response.json()
        })
        .then((data)=>{
            let filterData = data.filter(element=> element.category == "Men Shirts")
            setData(filterData)
            setIsPending(false)
        })
        .catch(()=>{
            setError(error.message)
            setIsPending(false)
        })
   },[])
   console.log(isPending)
   console.log('isPending')
    
   

    return (
        <>
        {isPending && <h1>Loading Shirts...</h1>}

            <div className="col-lg-9 col-md-8 col-12">
                <div className="row">

                    {data &&
                        
                            

                                data.map((data) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={data.id}>
                                        <div className="single-product">


                                            <div className="product-img">
                                                <a href="product-details.html">
                                                    <img className="default-img" src={data.image} alt="#" />
                                                    <img className="hover-img" src={data.image} alt="#" />
                                                </a>
                                                <div className="button-head">
                                                    <div className="product-action">
                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                    </div>
                                                    <div className="product-action-2">
                                                        <a title="Add to cart" href="#">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="product-content">
                                                <h3><a href="product-details.html">{data.description}</a></h3>
                                                <div className="product-price">
                                                    <span>Rs {data.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            
                        
                    }


                    {/* <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                <div className="product-price">
                    <span>$29.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                <div className="product-price">
                    <span>$29.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <span className="new">New</span>
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                <div className="product-price">
                    <span>$29.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                <div className="product-price">
                    <span>$29.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <span className="price-dec">30% Off</span>
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                <div className="product-price">
                    <span>$29.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                <div className="product-price">
                    <span>$29.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <span className="out-of-stock">Hot</span>
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                <div className="product-price">
                    <span className="old">$60.00</span>
                    <span>$50.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <span className="new">New</span>
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                <div className="product-price">
                    <span>$29.00</span>
                </div>
            </div>
        </div>
    </div> */}


                </div>
            </div>
        </>
    );
}

export default Shirts;