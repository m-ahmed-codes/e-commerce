import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createuser = () => {

    let [description, setDescription] = useState("")
    let [price, setPrice] = useState("")
    let [image, setImage] = useState("")
    let [category,setCategory]= useState("")
    let [categoryList,setCategoryList]= useState("")
    let [error,setError]=useState("")
    let [pending, setPending] = useState(false)

    let data = {
        description: description,
        price: price,
        image:image,
        category:category,
        // categoryList: categoryList,
        error:error,
        pending: pending
    }

    let navigate = useNavigate()


    useEffect(()=>{
       
        fetch(" http://localhost:8000/category")
        .then((response)=>{
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then((data)=>{
            setCategoryList(data)
            // console.log(data);
        })
        .catch((error)=>{
            setError(error.message)
        })
    },[])



    // console.log("testing1");

    let clickHandle = (e) => {
        e.preventDefault()
        // console.log("testing");

        setPending(true)

        fetch("http://localhost:8000/clothing", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

            .then(() => {
                setPending(false)
                navigate("/dashboard/viewuser")
                // console.log("testing");
            })
            .catch((error) => {
                console.log(error);
            })


    }









    return (
        <div className="content-wrapper ">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>General Form</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">General Form</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-6">
                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Add User</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <form onSubmit={(e)=>{clickHandle(e)}} >
                                    <div className="card-body">

                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Enter Description</label>
                                            <input type="text" className="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Enter description" />
                                        </div>
                                        <div className="form-group">
                                            <label >Enter Price</label>
                                            <input type="text" className="form-control" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Enter orice" />
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Image</label>
                                            <input type="text" className="form-control" value={image} onChange={(e) => { setImage(e.target.value) }} placeholder="Enter Image" />
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Category</label>
                                            <select className="form-control" value={category}  onChange={(e)=>{setCategory(e.target.value )}}>
                                               
                                                <option value="Please Select">Please Select</option>
                                              {
                                              categoryList && 
                                                categoryList.map((category)=>(<option value={category.title}> {category.title} </option>))}
                                            </select>
                                        </div>
                                      
                                       
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                            {/* /.card */}
                        </div>

                    </div>

                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>
    );
}

export default Createuser;