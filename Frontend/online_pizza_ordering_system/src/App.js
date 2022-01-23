import Signin from './pages/Signin'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
      
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
