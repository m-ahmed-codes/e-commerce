import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Product from "./Product";
import Home from "./Home";
import Page404 from '../Page404';
import Contact from "./Contact";
// import QuickView from "./QuickView";
import ViewCart from "./ViewCart";







const Main = () => {
    return ( 
        <>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/view-cart" element={<ViewCart></ViewCart>}></Route>
            {/* <Route path="/quick-view" element={<QuickView ></QuickView>}></Route> */}
            <Route path="/contact" element={<Contact></Contact>}></Route>

            <Route path='/products/*' element={<Product/>}></Route>
            <Route path='/*' element={<Page404></Page404>}></Route>
        </Routes>
        </>
     );
}
 
export default Main;