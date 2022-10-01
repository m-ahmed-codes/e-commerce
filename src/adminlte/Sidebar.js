import {  Route, Routes } from "react-router-dom";

// import Aside from "./Aside";
import Aside from "../adminlte/Aside";
import Nav from "../adminlte/Nav";
import Addcategory from '../adminlte/Addcategory';
import Createuser from '../adminlte/Createuser';
import Edituser from '../adminlte/Edituser';
import Viewuser from '../adminlte/Viewuser';
// import Test from "./Test";
// import Signup from "./Signup";

import './admin.css'


const Sidebar = () => {




    return (

        <>
            <Aside/>
            <Nav/>
            {/* <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div> */}

            <Routes>
                <Route path="//createuser" element={<Createuser/>} ></Route>
                <Route path="//viewuser" element={<Viewuser/>} ></Route>
                <Route path='//addcategory' element={<Addcategory/>} ></Route>
                <Route path='//edituser/:id' element={<Edituser/>}></Route>
                {/* <Route path="/testing" element={<Test/>} ></Route> */}
                
            </Routes>
            

        </>



    );
}

export default Sidebar;