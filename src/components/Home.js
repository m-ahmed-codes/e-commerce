import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ACTIONS, CartState } from "../context/Context";


const Home = () => {

    const { state: { cart, like }, dispatch } = CartState()



    let [data, setdata] = useState(null)
    let [dataViewQuick, setdataViewQuick] = useState('')
    let [tshirt, settshirt] = useState(null)
    let [shirt, setshirt] = useState(null)
    let [jeans, setjeans] = useState(null)
    let [watch, setwatch] = useState(null)
    let [shoe, setshoe] = useState(null)
    let [error, setError] = useState(null)
    let [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8000/clothing")
            .then((response) => {
                // console.log(response);
                if (!response.ok) {
                    throw Error("Data is not loaded in shirts")
                }
                return response.json()
            })
            .then((data) => {
                let MenShirt = data.filter(element => element.category == "Men Shirts")
                let MenTshirt = data.filter((element) => element.category == "Men T-shirts")
                let MenJeans = data.filter((element) => element.category == "Men Pants")
                let menWatches = data.filter((element) => element.category == "Men Watches")
                let MenShoes = data.filter((element) => element.category == "Men shoes")



                setdata(data)
                setshirt(MenShirt)
                settshirt(MenTshirt)
                setjeans(MenJeans)
                setwatch(menWatches)
                setshoe(MenShoes)
                setIsPending(false)
                // let newData = data
            })
            .catch(() => {
                setError(error.message)
                setIsPending(false)
            })
    }, [])

    // console.log(data)
    let newData = []
    // console.log(data[0])
    if (data) {
        data.forEach((element, index) => {
            if (index <= 6) {
                newData.push(element)

            }
            // console.log(element[index])

            // setForloopdata(newData)
        });


    }

    const handleViewClick = (data) => {
        setdataViewQuick(data)
        // console.log(dataViewQuick.image)


    }
    const [val, setval] = useState(1);
    // const handle = (e)=>{
        

    // }
    // console.log(cart)
    console.log(val)



    return (
        <>

            <header class="header shop">
                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">

                                <div className="col-lg-9 col-12">
                                    <div className="menu-area">
                                        {/* Main Menu */}
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="navbar-collapse">
                                                <div className="nav-inner">
                                                    <ul className="nav main-menu menu navbar-nav">
                                                        <li className="active"><Link to="/">Home</Link></li>
                                                        {/* <li><a href="#">Product</a></li> */}
                                                        {/* <li><a href="#">Service</a></li> */}
                                                        <li><a href="#">Shop<i className="ti-angle-down" /><span className="new">New</span></a>
                                                            <ul className="dropdown">
                                                                <li><Link to="/products">Shop Grid</Link></li>
                                                                <li><a href="cart.html">Cart</a></li>
                                                                <li><a href="checkout.html">Checkout</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Pages</a></li>
                                                        <li><a href="#">Blog<i className="ti-angle-down" /></a>
                                                            <ul className="dropdown">
                                                                <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="/contact">Contact Us</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                        {/*/ End Main Menu */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*/ End Header Inner */}

            {/* Slider Area */}
            <section className="hero-slider">
                {/* Single Slider */}
                <div className="single-slider">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-9 offset-lg-3 col-12">
                                <div className="text-inner">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <div className="hero-text">
                                                <h1 ><span>UP TO 50% OFF </span>Shoes For Man</h1>
                                                <p >Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                                                <div className="button">
                                                    <a href="#" className="btn">Shop Now!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Single Slider */}
            </section>
            {/*/ End Slider Area */}
            {/* Start Small Banner  */}
            <section className="small-banner section">
                <div className="container-fluid">
                    <div className="row">
                        {/* Single Banner  */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://static-01.daraz.pk/p/9b62e775ae1470ccf7f9d565cbce4bee.jpg" alt="#" />
                                <div className="content">
                                    <p>Man's Collectons</p>
                                    <h3>Summer travel <br /> collection</h3>
                                    <a href="#">Discover Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                        {/* Single Banner  */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://static-01.daraz.pk/p/e15b121092591ad7994e4ed2e00456f7.jpg" alt="#" />
                                <div className="content">
                                    <p>Bag Collectons</p>
                                    <h3>Awesome Bag <br /> 2020</h3>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                        {/* Single Banner  */}
                        <div className="col-lg-4 col-12">
                            <div className="single-banner tab-height">
                                <img src="https://static-01.daraz.pk/p/522ffe8c2e1df45875513bdff9e1eccf.jpg" alt="#" />
                                <div className="content">
                                    <p>Flash Sale</p>
                                    <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                                    <a href="#">Discover Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                    </div>
                </div>
            </section>
            {/* End Small Banner */}
            {/* Start Product Area */}
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="nav-main">
                                    {/* Tab Nav */}
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man's Shirt</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Man's T-Shirt</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Jeans</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Watches</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Shoes</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                                    </ul>
                                    {/*/ End Tab Nav */}
                                </div>
                                <div className="tab-content" id="myTabContent">


                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                {isPending && <h1>Loading Shirts...</h1>}

                                                {shirt &&
                                                    shirt.map((menshirt) => (

                                                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="product-details.html">
                                                                        <img className="default-img" src={menshirt.image} alt="#" />
                                                                        <img className="hover-img" src={menshirt.image} alt="#" />
                                                                    </a>
                                                                    <div className="button-head">
                                                                        <div className="product-action">
                                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#" onClick={() => { handleViewClick(menshirt) }} ><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                            {like.find((item) => menshirt.id === item.id) ? <a title="Wishlist" onClick={() => { dispatch({ type: ACTIONS.REMOVE_LIKE, payload: { id: menshirt.id } }) }}  ><i className="fa-solid fa-heart" /><span>Remove to like</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.LIKE, payload: menshirt }) }} ><i className="ti-heart" /><span>Add to like</span></a>}

                                                                            {/* <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a> */}
                                                                            {cart.find((item) => menshirt.id === item.id) ? <a title="cart" onClick={() => { dispatch({ type: ACTIONS.REMOVE_CART, payload: { id: menshirt.id } }) }}  ><i className="ti-bar-chart-alt" /><span>Remove to cart</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.ADD_CART, payload: menshirt }) }} ><i className="ti-bar-chart-alt" /><span>Add to cart</span></a>}
                                                                            {/* <a title="cart" onClick={()=>{dispatch({type:ACTIONS.ADD_CART,payload:menshirt})}} ><i className="ti-bar-chart-alt" /><span>Add to cart</span></a> */}
                                                                        </div>
                                                                        <div className="product-action-2">
                                                                            <a title="Add to cart" href="#">Add to cart</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3><a href="product-details.html">{menshirt.description}</a></h3>
                                                                    <div className="product-price">
                                                                        <span>Rs.{menshirt.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* END SHIRTS */}



                                    {/* START T-SHIRTS */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="women" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">

                                                {isPending && <h1>Loading Shirts...</h1>}

                                                {tshirt &&
                                                    tshirt.map((menTshirt) => (
                                                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                            <div className="single-product" >
                                                                <div className="product-img" style={{ height: '20rem' }}>
                                                                    <a href="product-details.html">
                                                                        <img className="default-img" src={menTshirt.image} alt="#" />
                                                                        <img className="hover-img" src={menTshirt.image} alt="#" />
                                                                    </a>
                                                                    <div className="button-head">
                                                                        <div className="product-action">
                                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" onClick={() => { handleViewClick(menTshirt) }}><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                            {like.find((item) => menTshirt.id === item.id) ? <a title="Wishlist" onClick={() => { dispatch({ type: ACTIONS.REMOVE_LIKE, payload: { id: menTshirt.id } }) }}  ><i className="fa-solid fa-heart" /><span>Remove to like</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.LIKE, payload: menTshirt }) }} ><i className="ti-heart" /><span>Add to like</span></a>}

                                                                            {/* <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a> */}
                                                                            {cart.find((item) => menTshirt.id === item.id) ? <a title="cart" onClick={() => { dispatch({ type: ACTIONS.REMOVE_CART, payload: { id: menTshirt.id } }) }}  ><i className="ti-bar-chart-alt" /><span>Remove to cart</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.ADD_CART, payload: menTshirt }) }} ><i className="ti-bar-chart-alt" /><span>Add to cart</span></a>}

                                                                            {/* <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a> */}
                                                                        </div>
                                                                        <div className="product-action-2">
                                                                            <a title="Add to cart" href="#">Add to cart</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3><a href="product-details.html">{menTshirt.description}</a></h3>
                                                                    <div className="product-price">
                                                                        <span>Rs.{menTshirt.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End T-SHIRT*/}






                                    {/* Start JEANS */}
                                    <div className="tab-pane fade" id="kids" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                {isPending && <h1>Loading Jeans...</h1>}

                                                {jeans &&
                                                    jeans.map((jeans) => (
                                                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                            <div className="single-product" >
                                                                <div className="product-img" style={{ height: '20rem' }}>
                                                                    <a href="product-details.html">
                                                                        <img className="default-img" src={jeans.image} alt="#" />
                                                                        <img className="hover-img" src={jeans.image} alt="#" />
                                                                    </a>
                                                                    <div className="button-head">
                                                                        <div className="product-action">
                                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" onClick={() => { handleViewClick(jeans) }}><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                            {like.find((item) => jeans.id === item.id) ? <a title="Wishlist" onClick={() => { dispatch({ type: ACTIONS.REMOVE_LIKE, payload: { id: jeans.id } }) }}  ><i className="fa-solid fa-heart" /><span>Remove to like</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.LIKE, payload: jeans }) }} ><i className="ti-heart" /><span>Add to like</span></a>}

                                                                            {/* <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a> */}
                                                                            {cart.find((item) => jeans.id === item.id) ? <a title="cart" onClick={() => { dispatch({ type: ACTIONS.REMOVE_CART, payload: { id: jeans.id } }) }}  ><i className="ti-bar-chart-alt" /><span>Remove to cart</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.ADD_CART, payload: jeans }) }} ><i className="ti-bar-chart-alt" /><span>Add to cart</span></a>}

                                                                            {/* <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a> */}
                                                                        </div>
                                                                        <div className="product-action-2">
                                                                            <a title="Add to cart" href="#">Add to cart</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3><a href="product-details.html">{jeans.description}</a></h3>
                                                                    <div className="product-price">
                                                                        <span>Rs.{jeans.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End JEANS */}




                                    {/* Start WATCH */}
                                    <div className="tab-pane fade" id="accessories" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                {isPending && <h1>Loading Watches...</h1>}

                                                {watch &&
                                                    watch.map((watches) => (
                                                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                            <div className="single-product" >
                                                                <div className="product-img" style={{ height: '20rem' }}>
                                                                    <a href="product-details.html">
                                                                        <img className="default-img" src={watches.image} alt="#" />
                                                                        <img className="hover-img" src={watches.image} alt="#" />
                                                                    </a>
                                                                    <div className="button-head">
                                                                        <div className="product-action">
                                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" onClick={() => { handleViewClick(watches) }}><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                            {like.find((item) => watches.id === item.id) ? <a title="Wishlist" onClick={() => { dispatch({ type: ACTIONS.REMOVE_LIKE, payload: { id: watches.id } }) }}  ><i className="fa-solid fa-heart" /><span>Remove to like</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.LIKE, payload: watches }) }} ><i className="ti-heart" /><span>Add to like</span></a>}

                                                                            {/* <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a> */}
                                                                            {cart.find((item) => watches.id === item.id) ? <a title="cart" onClick={() => { dispatch({ type: ACTIONS.REMOVE_CART, payload: { id: watches.id } }) }}  ><i className="ti-bar-chart-alt" /><span>Remove to cart</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.ADD_CART, payload: watches }) }} ><i className="ti-bar-chart-alt" /><span>Add to cart</span></a>}

                                                                            {/* <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a> */}
                                                                        </div>
                                                                        <div className="product-action-2">
                                                                            <a title="Add to cart" href="#">Add to cart</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3><a href="product-details.html">{watches.description}</a></h3>
                                                                    <div className="product-price">
                                                                        <span>Rs.{watches.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End WATCH */}





                                    {/* Start SHOES */}
                                    <div className="tab-pane fade" id="essential" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">

                                                {isPending && <h1>Loading Shoes...</h1>}

                                                {shoe &&
                                                    shoe.map((shoe) => (
                                                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                            <div className="single-product" >
                                                                <div className="product-img" style={{ height: '20rem' }}>
                                                                    <a href="product-details.html">
                                                                        <img className="default-img" src={shoe.image} alt="#" />
                                                                        <img className="hover-img" src={shoe.image} alt="#" />
                                                                    </a>
                                                                    <div className="button-head">
                                                                        <div className="product-action">
                                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" to="/quick-view" onClick={() => { handleViewClick(shoe) }}><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                            {/* <img className="hover-img" src={shoe.image} alt="#" /> */}

                                                                            {like.find((item) => shoe.id === item.id) ? <a title="Wishlist" onClick={() => { dispatch({ type: ACTIONS.REMOVE_LIKE, payload: { id: shoe.id } }) }}  ><i className="fa-solid fa-heart" /><span>Remove to like</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.LIKE, payload: shoe }) }} ><i className="ti-heart" /><span>Add to like</span></a>}


                                                                            {/* <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a> */}
                                                                            {cart.find((item) => shoe.id === item.id) ? <a title="cart" onClick={() => { dispatch({ type: ACTIONS.REMOVE_CART, payload: { id: shoe.id } }) }}  ><i className="ti-bar-chart-alt" /><span>Remove to cart</span></a> : <a title="cart" onClick={() => { dispatch({ type: ACTIONS.ADD_CART, payload: shoe }) }} ><i className="ti-bar-chart-alt" /><span>Add to cart</span></a>}

                                                                            {/* <button title="Cart" onClick={()=>{}}><i className="ti-bar-chart-alt" /><span>Add to Cart</span></button> */}
                                                                        </div>
                                                                        <div className="product-action-2">
                                                                            <a title="Add to cart" href="#">Add to cart</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3><a href="product-details.html">{shoe.description}</a></h3>
                                                                    <div className="product-price">
                                                                        <span>Rs.{shoe.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End SHOES */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Product Area */}
            {/* Start Midium Banner  */}
            <section className="midium-banner">
                <div className="container">
                    <div className="row">
                        {/* Single Banner  */}
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://static-01.daraz.pk/p/8503d7b281ab812b834788ecbfd13b0e.jpghttps://static-01.daraz.pk/p/e15b121092591ad7994e4ed2e00456f7.jpg" style={{ height: '27rem' }} alt="#" />
                                <div className="content">
                                    <p>Man's shoes Collectons</p>
                                    <h3>Man's items <br />Up to<span> 50%</span></h3>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                        {/* Single Banner  */}
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://static-01.daraz.pk/p/328e32b779c2bf0d162f00d8db755529.jpg" style={{ height: '27rem' }} alt="#" />
                                <div className="content">
                                    <p>Man's Watches Collectons</p>
                                    <h3>mid season <br /> up to <span>70%</span></h3>
                                    <a href="#" className="btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                    </div>
                </div>
            </section>
            {/* End Midium Banner */}
            {/* Start Most Popular */}
            <div className="product-area most-popular section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Hot Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel popular-slider">
                                <div className="single-product" >
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src='https://static-01.daraz.pk/p/522ffe8c2e1df45875513bdff9e1eccf.jpg' st alt="#" />
                                            <img className="hover-img" src='https://static-01.daraz.pk/p/522ffe8c2e1df45875513bdff9e1eccf.jpg' alt="#" />
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
                                        <h3><a href="product-details.html">Red shirt</a></h3>
                                        <div className="product-price">
                                            {/* <span className="old">$60.00</span> */}
                                            <span>Rs. 1700</span>
                                        </div>
                                    </div>
                                </div>





                                {/* Start Single Product */}
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://static-01.daraz.pk/p/e15b121092591ad7994e4ed2e00456f7.jpg" alt="#" />
                                            <img className="hover-img" src="https://static-01.daraz.pk/p/e15b121092591ad7994e4ed2e00456f7.jpg" alt="#" />
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
                                        <h3><a href="product-details.html">Watch</a></h3>
                                        <div className="product-price">
                                            <span className="old">$60.00</span>
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Product */}
                                {/* Start Single Product */}
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://static-01.daraz.pk/p/328e32b779c2bf0d162f00d8db755529.jpg" alt="#" />
                                            <img className="hover-img" src="https://static-01.daraz.pk/p/328e32b779c2bf0d162f00d8db755529.jpg" alt="#" />
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
                                        <h3><a href="product-details.html">Digital watch</a></h3>
                                        <div className="product-price">
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Product */}
                                {/* Start Single Product */}
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://static-01.daraz.pk/p/641d24b75c6386ef7a7b3b202f2a1ebd.jpg" alt="#" />
                                            <img className="hover-img" src="https://static-01.daraz.pk/p/641d24b75c6386ef7a7b3b202f2a1ebd.jpg" alt="#" />
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
                                        <h3><a href="product-details.html">Shoes</a></h3>
                                        <div className="product-price">
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Product */}
                                {/* Start Single Product */}
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://static-01.daraz.pk/p/9b62e775ae1470ccf7f9d565cbce4bee.jpg" alt="#" />
                                            <img className="hover-img" src="https://static-01.daraz.pk/p/9b62e775ae1470ccf7f9d565cbce4bee.jpg" alt="#" />
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
                                        <h3><a href="product-details.html">Jeans</a></h3>
                                        <div className="product-price">
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Product */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Most Popular Area */}


            {/* Start Shop Home List  */}

            {/* End Shop Home List  */}
            {/* Start Cowndown Area */}
            <section className="cown-down">
                <div className="section-inner ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-12 padding-right">
                                <div className="image" style={{ height: '27rem' }}>
                                    <img src="https://static-01.daraz.pk/p/9b62e775ae1470ccf7f9d565cbce4bee.jpg" alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 padding-left">
                                <div className="content">
                                    <div className="heading-block">
                                        <p className="small-title">Deal of day</p>
                                        <h3 className="title">Beatutyful dress for women</h3>
                                        <p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
                                        <h1 className="price">$1200 <s>$1890</s></h1>
                                        <div className="coming-time">
                                            <div className="clearfix" data-countdown="2022/12/30" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /End Cowndown Area */}
            {/* Start Shop Blog  */}

            {/* End Shop Blog  */}
            {/* Start Shop Services Area */}
            <section className="shop-services section home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-rocket" />
                                <h4>Free shiping</h4>
                                <p>Orders over $100</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-reload" />
                                <h4>Free Return</h4>
                                <p>Within 30 days returns</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-lock" />
                                <h4>Sucure Payment</h4>
                                <p>100% secure payment</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-tag" />
                                <h4>Best Peice</h4>
                                <p>Guaranteed price</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Shop Services Area */}
            {/* Start Shop Newsletter  */}
            <section className="shop-newsletter section">
                <div className="container">
                    <div className="inner-top">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-12">
                                {/* Start Newsletter Inner */}
                                <div className="inner">
                                    <h4>Newsletter</h4>
                                    <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                        <input name="EMAIL" placeholder="Your email address" required type="email" />
                                        <button className="btn">Subscribe</button>
                                    </form>
                                </div>
                                {/* End Newsletter Inner */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Shop Newsletter */}
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
                                        <div className="quickview-slider">
                                            <div className="single-slider">
                                                <img src={dataViewQuick.image}  />
                                            </div>
                                            {/* <div className="single-slider">
                                                <img src={dataViewQuick.image} alt={dataViewQuick.image} />
                                            </div> */}

                                        </div>
                                    </div>
                                    {/* End Product slider */}
                                    {/* </div> */}


                                    {/* <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"> */}
                                    <div className="quickview-content">
                                        <h2>{dataViewQuick.category}</h2>
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
                                        <h3>Rs. {dataViewQuick.price}</h3>
                                        <div className="quickview-peragraph">
                                            <p>{dataViewQuick.description}</p>
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
                                            <div className="input-group" >
                                                <div className="button minus">
                                                    <button type="button" className="btn btn-primary btn-number"  data-type="minus" data-field="quant[1]">
                                                        <i className="ti-minus" />
                                                    </button>
                                                </div>
                                                {/* onChange={(e)=>{dispatch({type:ACTIONS.CHANGE_QWT,payload:{id:dataViewQuick.id,qty:e.target.value}})}} */}
                                                <input type="number" name="quant[1]" className="input-number" data-min={1} data-max={1000} defaultValue={1}  onChange={(e)=>{setval(e.target.value)}}   />
                                                <div className="button plus">
                                                    <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                        <i className="ti-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* / End Input Order */}
                                        </div>
                                        <div className="add-to-cart">
                                        {cart.find((item) => dataViewQuick.id === item.id) ? <a className="btn" onClick={() => { dispatch({ type: ACTIONS.REMOVE_CART, payload: { id: dataViewQuick.id } }) }}  ><span>Removecart</span></a> : <a className="btn w-100" onClick={() => { dispatch({ type: ACTIONS.VIEWADDCART, payload: {data:dataViewQuick,val:val}  }) }} ><span>Add cart</span></a>}

                                            {/* <a onClick={() => { dispatch({ type: ACTIONS.ADD_CART, payload: dataViewQuick }) }} className="btn">Add to cart</a> */}
                                            {like.find((item) => dataViewQuick.id === item.id) ? <a title="Remove Wishlist" className="btn min" onClick={() => { dispatch({ type: ACTIONS.REMOVE_LIKE, payload: { id: dataViewQuick.id } }) }}  ><i className="fa-solid fa-heart" /><span></span></a> : <a title="Add Wishlist" className="btn min" onClick={() => { dispatch({ type: ACTIONS.LIKE, payload: dataViewQuick }) }} ><i className="ti-heart" /><span></span></a>}

                                            {/* <a href="#" className="btn min"><i className="ti-heart" /></a> */}
                                            {/* <a href="#" className="btn min"><i className="fa fa-compress" /></a> */}
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
                                        <p>Copyright © 2020 <a href="http://www.wpthemesgrid.com" target="_blank">Wpthemesgrid</a>  -  All Rights Reserved.</p>
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

export default Home;