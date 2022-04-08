import React, { useState, useEffect } from "react";
import "./navbAdmin.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";


const NavbAdmin = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="main-nav3">
        <div className="hamburg-menu">
          <ul>
            <li>
                <img style={{height : '50px'}} src="./images/menu-rounded.png" alt="img"/>
                <ul>
                    <li><a href="/add-product">Add Product</a></li>
                    <li><a href="/add-combo">Add Combo</a></li>
                    <li><a href="/add-topping">Add Topping</a></li>
                    <li><a href="/admin-order">Orders</a></li>
                    <li><a href="/search-emp">Update Employee Details</a></li>
                    <li><a href="/get-feedbacks">Show Feedbacks</a></li>
                    <li><a href="/signin">Logout</a></li>
                </ul>
              </li>
          </ul>
        </div>
          {/* 1st part */}
              <div className="pizza-logo2">
                <ul className="nav nav-pills">
                    <li>
                      <img src="./images/icons8-pizza-64.png" alt="img"/>
                    </li>
                    <li>
                      <h1 style={{color:'white'}}>Pizzeria</h1>
                    </li>
                </ul>
              </div>
      </nav>
    </>
  );
};

export default NavbAdmin;
