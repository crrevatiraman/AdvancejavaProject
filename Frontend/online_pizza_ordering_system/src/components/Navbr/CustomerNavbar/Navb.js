import React, { useState, useEffect } from "react";
import "./navb.css";
import { useNavigate } from "react-router";
import Img1 from './pizzalogo2.png'


const Navb = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('loginStatus')
    navigate("/signin");
  }


  
  return (
    <>
      <nav className="main-nav">
          {/* 1st part */}
              <div className="pizza-logo">
                <ul className="nav nav-pills">
                    <li>
                    <img src={Img1} alt="img" height="46"
                            loading="lazy"
                            style={{ marginBottom:'5px', marginRight: '150px' }}/>
                    </li>
                    <li>
                    
                    </li>
                </ul>
              </div>
            
          {/* 2nd part */}
          <div className="menu-link">
            <ul className="nav nav-pills">
                <li>
                <button onClick={() => {
                          navigate("/customer-home");
                        }} className="btn btn-warning btn-lg">Home</button>
                </li>
                <li>
                <button onClick={logout} className="btn btn-warning btn-lg">Logout</button>
                </li>
            </ul>
          </div>

          
          <div>

        
          </div>
      </nav>
    </>
  );
};

export default Navb;
