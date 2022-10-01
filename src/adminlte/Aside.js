import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


const Aside = () => {
    let navigate=useNavigate()
  let handleSignout = function(){

    localStorage.removeItem('token')
    navigate('/login')

  }


    return ( 
        <aside className="main-sidebar sidebar-dark-primary elevation-4 mt-0" >
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


                            <li className="nav-header">Users</li>
                            <li className="nav-item">
                                <Link to="/dashboard/createuser" className="nav-link">
                                    <i className="nav-icon far fa-image" />
                                    <p>
                                        Add Users
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/viewuser" className="nav-link">
                                    <i className="nav-icon fas fa-columns" />
                                    <p>
                                        View Users
                                    </p>
                                </Link>
                            </li>




                            <li className="nav-header">Products</li>
                            <li className="nav-item">
                                <Link to="/dashboard/addcategory" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>Add Category</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">
                                    <i className="nav-icon fas fa-file" />
                                    <p>View Products</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={handleSignout} to="/signup" className="nav-link">
                                    <i className="nav-icon fas fa-file" />
                                    <p>Signup</p>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
     );
}
 
export default Aside;