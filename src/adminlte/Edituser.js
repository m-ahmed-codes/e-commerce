import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Edituser = () => {
    let { id } = useParams()
    console.log(id);

    let navigate = useNavigate()

    let [description, setDescription] = useState()
    let [price, setPrice] = useState()
    let [image, setImage] = useState()
    let [category,setCategory]= useState()
    let [categoryList,setCategoryList]= useState("")

    useEffect(()=>{
       
        fetch("http://localhost:8000/category")
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
        .catch(()=>{
            // setError(error.message)
            console.log("error in category");
        })
    },[])

    let updateData = {description,price,image,category}


    //  useFetch hook
    let { data, error, isPending } = useFetch(`http://localhost:8000/clothing/${id}`)

    let handleUpdate = (e, dataid) => {
        e.preventDefault()
        // let updateData = {email,name}
        console.log(updateData);
        fetch(`http://localhost:8000/clothing/${dataid}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData)
        
        })
            .then(() => {
                navigate("/dashboard/viewuser")
                console.log("testing in update");
            })
            .catch(() => {
                console.log("error in update");
            })
    }



    return (

        <div>
            <div className="content-wrapper">
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
                                    <li className="breadcrumb-item active">Edit User</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>

                {isPending && <h1>Loading...</h1>}

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
                                    {data && <form onSubmit={(e) => { handleUpdate(e, data.id) }}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Enter Email Address</label>
                                                <input type="email" className="form-control" defaultValue={data.description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter description" />
                                            </div>
                                            <div className="form-group">
                                                <label >Enter Name</label>
                                                <input type="text" className="form-control" defaultValue={data.price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter price" />
                                            </div>
                                            <div className="form-group">
                                                <label>Enter Image</label>
                                                <input type="text" className="form-control" defaultValue={data.image} onChange={(e)=>{setImage(e.target.value)}} placeholder="Enter Image" />
                                            </div>
                                            <div className="form-group">
                                            <label>Enter Category</label>
                                            <select className="form-control" defaultValue={data.category}  onChange={(e) => {setCategory(e.target.value) }}>
                                                {/* <option value="Please Select">Please Select</option> */}
                                                {
                                                    categoryList &&
                                                    categoryList.map((category) => (<option value={category.title}>{category.title}</option>))}

                                            </select>
                                        </div>

                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>}
                                </div>
                                {/* /.card */}
                            </div>

                        </div>

                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {error && <h1>{error}</h1>}
        </div>
    );
}

export default Edituser;