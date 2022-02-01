import Signin from './pages/Signin'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ForgotPassword from './pages/ForgotPassword'
import './App.css';
import SearchEmp from './pages/Admin_Pages/SearchEmp'
import UpdateEmployee from './pages/Admin_Pages/updateEmp'
import Addcombo from './pages/Admin_Pages/addCombo'
import Addproduct from './pages/Admin_Pages/addproduct'
import Addfeedback from './pages/Customer_Pages/feedback'
import AddTopping from './pages/Admin_Pages/addTopping'
import AddSubCategory from './pages/Admin_Pages/addSubCategory'
// import CustomerFeedback from './pages/Admin_Pages/CustomerFeedback'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/search-emp" element={<SearchEmp />} />
          <Route path="/update-employee" element={<UpdateEmployee />} />
          <Route path = "/add-product" element = {<Addproduct/>}/>
          <Route path = "/add-combo" element = {<Addcombo/>}/>
          <Route path = "/add-feedback" element = {<Addfeedback/>}/>
          <Route path = "/add-topping" element = {<AddTopping/>}/>
          <Route path = "/add-subcategory" element = {<AddSubCategory/>}/>
          {/* <Route path = "/customer-feeback" element = {<CustomerFeedback/>}/> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
