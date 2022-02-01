import "./index.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { URL } from "../../../config";
import { toast } from "react-toastify";
import axios from "axios";

const SearchEmp = () => {
  const { empState } = useLocation();
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [employee, setEmployee] = useState([]);

  const navigate = useNavigate();

  const searchEmployee = () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else {
      const url = `${URL}/user/search-employee/${email}`;

      axios.get(url).then((response) => {
        const result = response.data;

        if (result["status"] == "success") {
          setEmployee(result["data"]);
          setCheck(true);
          console.log(result);
        } else {
          toast.error("email does not exist");
        }
      });
    }
  };

  return (
    <div className="background-img example">
      <nav class="navbar navbar-light background-color">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <button
            className="btn btn-secondary btn-menu"
            onClick={searchEmployee}
          >
            Menu
          </button>
        </div>
      </nav>

      <h1 className="title1">Search Employee</h1>

      <div className="row ">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control margin">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <button
            onClick={searchEmployee}
            className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
          >
            Search
          </button>
        </div>
        <div className="col"></div>
      </div>
      <div className="row margin-top">
        <div className="col"></div>
        <div className="col">
          {check && (
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{employee.userId}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate("/update-employee", {
                            state: { employee: employee },
                          });
                        }}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="col"></div>
      </div>
     
    </div>
  );
};

export default SearchEmp;
