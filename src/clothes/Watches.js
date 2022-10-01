import { useEffect, useState } from "react";

const Watches = () => {
    let [data, setData] = useState(null)
    let [isPending, setIsPending] = useState(null)
    let [error, setError] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8000/clothing")
            .then((response) => {
                if (!response.ok) {
                    throw Error("data is not loaded in Watches")
                }
                return response.json()
            })
            .then((data) => {
                let filterData = data.filter((element) => element.category == "Men Watches")
                setData(filterData)
                setIsPending(false)
            })
            .catch(() => {
                setError(error.message);
                setIsPending(false)
            })
    }, [])

    return (
        <>
            {isPending && <h1>Loading Watches...</h1>}

            <div className="col-lg-9 col-md-8 col-12">
                <div class="row">

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




                </div>
            </div>

        </>
    );
}

export default Watches;