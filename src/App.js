
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Sidebar from '../src/adminlte/Sidebar';
import Main from './components/Main';
// import Navbar from './components/Navbar';
// import Product from './components/Product';
// import Main from './components/Main';

import './components/admin.css'
import SignIn from './signIn/SignIn';
import Auth from './signIn/Auth';
import Signup from './signIn/Signup';
// import Page404 from './Page404';
// import Createuser from './components/Createuser';



function App() {
  return (
    <>
   <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
      <Route path='/login' element={<SignIn></SignIn>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
       
       <Route path='/*' element={<Main/>}></Route>

       <Route element={<Auth></Auth>}>
       <Route path="/dashboard/*" element={<Sidebar/>}></Route>
       </Route>

       {/* <Route path='/*' element={<Page404></Page404>}></Route> */}

       {/* <Route path='/createuser' element={<Createuser/>}></Route> */}
      </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
