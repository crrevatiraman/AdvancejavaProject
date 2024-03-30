import Signin from './pages/Signin'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';

import Addproduct from './pages/Admin_Pages/addproduct'
import AddSubCategory from './pages/Admin_Pages/addSubCategory'
import EditSubCategory from './pages/Admin_Pages/EditSubCategory'
import Editproduct from './pages/Admin_Pages/EditProduct'
import AdminHome from './pages/Admin_Pages/AdminHome'
import CustomerHome from './pages/Customer_Pages/CustomerHome'

import Checkout from './pages/Customer_Pages/Checkout/Checkout'
import Cart1 from './pages/Customer_Pages/Cart/Cart1'
import AdminOrder from './pages/Admin_Pages/AllOrders/AdminOrder'
import CustomerOrder from './pages/Customer_Pages/Orders/CustomerOrder'
import Payment from './pages/Customer_Pages/Payment/Payment'
import UpdateProfile from './pages/Customer_Pages/UpdateProfile'
import Contact from './components/Contactus/contact.js'


function App() {



  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />

            {/* Admin routes */}
        { sessionStorage.loginStatus == 1  && sessionStorage.role == 'admin'? <Route>
       
          <Route path = "/add-product" element = {<Addproduct/>}/>
          
          <Route path = "/add-subcategory" element = {<AddSubCategory/>}/>
          <Route path = "/edit-product" element = {<Editproduct/>}/>
          <Route path = "/admin-home" element = {<AdminHome/>}/>
          <Route path = "/edit-subcategory" element = {<EditSubCategory/>}/>
         
          <Route path = "/admin-order" element = {<AdminOrder/>}/>
        </Route> : <Route path="/" element={<Signin />} />} 

                {/* Customer routes */}
        { sessionStorage.loginStatus == 1  && sessionStorage.role == 'null' ? <Route>  
        <Route path = "/customer-home" element = {<CustomerHome/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>
          <Route path = "/cart" element = {<Cart1/>}/>
          <Route path = "/customer-order" element = {<CustomerOrder/>}/>
          <Route path = "/payment" element = {<Payment/>}/>
          <Route path = "/contact111" element={<Contact/>}/>
          <Route path = "/update-profile" element = {<UpdateProfile/>}/>
         
        </Route> : <Route path="/" element={<Signin />} />} 

        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
