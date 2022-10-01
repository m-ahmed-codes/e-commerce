import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcategory = () => {

    let [title,setTitle]=useState("")

    let data={
        title:title
    }

    let navigate = useNavigate()
    // console.log('tets')
    let clickHandle = (e)=>{
        e.preventDefault()
        // console.log(title)

        // console.log("test");


        fetch("http://localhost:8000/category", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        .then(()=>{
            navigate("/viewuser")
            // console.log("testing");
        })
        .catch(() => {
            // console.log("test");
        })

    }

    return (

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
                                    <h3 className="card-title">Add Category</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <form onSubmit={(e)=>{clickHandle(e)}} >
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Enter Category</label>
                                            <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value) }}  placeholder="Enter Category" />
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

export default Addcategory;