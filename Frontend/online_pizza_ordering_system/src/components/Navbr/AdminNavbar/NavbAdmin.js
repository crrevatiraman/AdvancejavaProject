import React, { useState, useEffect } from "react";
import "./navbAdmin.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import Img1 from './pizzalogo2.png'

const NavbAdmin = () => {
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
      <nav className="main-nav3">
        <div className="hamburg-menu">
          <ul>
            <li>
                <img style={{height : '50px'}} src="./images/menu-rounded.png" alt="img"/>
                <ul>
                    <li><a href="/add-product">Add Product</a></li>
                  
                    <li><a href="/admin-order">Orders</a></li>
                    
                    <li><a style={{color:"black"}} onClick={logout}>Logout</a></li>
                </ul>
              </li>
          </ul>
        </div>
          {/* 1st part */}
              <div className="pizza-logo2">
                <ul className="nav nav-pills">
                    <li>
                    <img src={Img1} alt="img" height="46"
                            loading="lazy"
                            style={{ marginBottom:'18px', marginRight: '150px' }}/>
                    </li>
                    
                </ul>
              </div>
      </nav>
    </>
  );
};

export default NavbAdmin;
