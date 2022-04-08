import React, { useState, useEffect } from "react";
import "./navb1.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";


const Navb1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="main-nav1">
          {/* 1st part */}
              <div className="pizza-logo">
                <ul className="nav nav-pills">
                    <li>
                    <img src="./images/icons8-pizza-64.png" alt="img"/>
                    </li>
                    <li>
                    <h1 style={{color:'white'}}>Pizzeria</h1>
                    </li>
                </ul>
              </div>
            
          {/* 2nd part */}
          <div className="menu-link1">
            <ul>
                <li>
                  <img style={{height : '50px'}} src="./images/menu-rounded.png" alt="img"/>
                  <ul>
                    <li><a href="/customer-order">My Orders</a></li>
                    <li><a href="/update-profile">Update Profile</a></li>
                    <li><a href="/signin">Logout</a></li>
                  </ul>
                </li>
                <li>
                <img 
                onClick={()=>{navigate('/cart')}}
                
                style={{height : '50px'}} src="./images/shopping-cart.png" alt="img"/>
                </li>
            </ul>
          </div>

          {/* 3rd button */}
          <div>

        
          </div>
      </nav>
    </>
  );
};

export default Navb1;
