import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./adminCommonNavb.css"
import Img1 from './pizzalogo2.png'


const AdminCommonNavb = () => {
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
      <nav className="common-nav-admin">
          {/* 1st part */}
              <div className="pizza-logo">
                <ul className="nav nav-pills">
                    <li>
                    <img src={Img1} alt="img" height="46"
                            loading="lazy"
                            style={{ marginBottom:'5px', marginRight: '150px' }}/>
                    </li>
                    
                </ul>
              </div>
            
          {/* 2nd part */}
          <div className="common-link-admin">
            <ul className="nav nav-pills">
                <li>
                <button onClick={() => {
                          navigate("/admin-home");
                        }} className="btn btn-warning btn-lg">Home</button>
                </li>
                <li>
                <button onClick={logout} className="btn btn-warning btn-lg">Logout</button>
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

export default AdminCommonNavb;
