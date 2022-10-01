// import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";




const Viewuser = () => {

    let [update, setUpdate] = useState("")

    let { data, error, isPending } = useFetch("http://localhost:8000/clothing", update)

    

    let handleDelete = (e,id) => {
        // console.log(id);
        fetch(`http://localhost:8000/clothing/${id}`, { method: "DELETE" })
            .then(() => {
                setUpdate(id)
                // console.log(id);
                // console.log("testting");
            })
            .catch(() => {
                console.log("error in deleting");
            })
    }

    // let handleEdit = (e) => {
    //     e.target.setAttribute('class', 'd-none')
    //     e.target.nextSibling.setAttribute('class', 'btn btn-primary d-inline-block')
    //     let td = e.target.parentElement.children
    //     //  console.log(td);
    //     let editArray = Array.from(td)
    //     editArray[1].contentEditable = true
    //     editArray[2].contentEditable = true
    //     editArray[3].contentEditable = true
    //     editArray[4].contentEditable = true
    // }


    

    // let handleUpdate = (e,dataid) =>{
    //     let td = e.target.parentElement.children
    //     let editArray = Array.from(td)
    //     // console.log(td);
    //     let email = editArray[1].innerText;
    //     let userName = editArray[2].innerText;
    //     let phoneNo = editArray[3].innerText;
    //     let address = editArray[4].innerText;

    //     let updateData = {email,userName,phoneNo,address}
    //     fetch(`http://localhost:8000/users/${dataid}`,{
    //         method:"PATCH",
    //         headers:{"Content-Type":"application/json"},
    //         body:JSON.stringify(updateData)
    //     })
    //     .then(()=>{
    //         // console.log("testing");
    //         editArray[1].contentEditable = false
    //         editArray[2].contentEditable = false
    //         editArray[3].contentEditable = false
    //         editArray[4].contentEditable = false
    //         e.target.setAttribute('class', 'd-none')
    //         e.target.previousSibling.setAttribute('class', 'btn btn-primary d-inline-block')
    //     })
    //     .catch(()=>{
    //         console.log("test");
    //     })
    // }




    return (

        <div>

            <section style={{ marginLeft: '250px' }} className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Simple Tables</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Simple Tables</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {isPending && <h1>Loading...</h1>}


            <div className="row  restyle-row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Responsive Hover Table</h3>
                            <div className="card-tools">
                                <div className="input-group input-group-sm" style={{ width: '150px' }}>
                                    {/* <input type="text" className="form-control float-right" placeholder="Search" /> */}
                                    {/* <div className="input-group-append">
                                        <button type="submit" className="btn btn-default">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>


                        {data &&
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>Phone no.</th>
                                            <th>Address</th>
                                            <th>Category</th>
                                            {/* <th>Image</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map((data) => (
                                                <tr key={data.id} >
                                                    <td>{data.id}</td>
                                                    <td>Rs {data.price}</td>
                                                    <td>{data.description}</td>
                                                    <td>{data.category}</td>
                                                    <td><a href={data.image} target="_blank">See Image</a></td>
                                                    {/* <button type="button" className="btn btn-primary" onClick={(e) => { handleEdit(e) }} >Edit</button> */}
                                                    {/* <button type="button" className="btn btn-primary d-none" onClick={(e)=>{handleUpdate(e,data.id)}} >Update</button> */}
                                                    <Link  to={`/dashboard/edituser/${data.id}`} className="btn btn-primary" >Edit</Link>
                                                    <button type="button" className="btn btn-danger" onClick={(e) => { handleDelete(e,data.id) }} >Delete</button>
                                                </tr>
                                            ))
                                        }



                                    </tbody>
                                </table>
                            </div>}

                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
            </div>

            {error && <h1>{error}</h1>}

        </div>
    );
}

export default Viewuser;