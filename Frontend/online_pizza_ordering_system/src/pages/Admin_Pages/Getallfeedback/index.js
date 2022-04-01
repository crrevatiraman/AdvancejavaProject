import "./index.css";

import { useLocation, useNavigate } from "react-router";
import { useEffect,useState } from 'react';

import { URL } from "../../../config";
import { toast } from "react-toastify";
import axios from "axios";

const GetFeedback = () => {
  // const { empState } = useLocation();
  // const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [employee, setEmployee] = useState([]);
 

  const navigate = useNavigate();

  const getallfeedback = () => {
    const url = `${URL}/order/getall-feedback`;

    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setEmployee(result["data"]);
        setCheck(true);
       // console.log(result);
        console.log(employee);
      } 
    });
  };

  useEffect(() => {
    getallfeedback()
    console.log('getting called')
  }, [])


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
            // onClick={searchEmployee}
          >
            Menu
          </button>
        </div>
      </nav>

      <h1 className="title1">Get All FeedBack</h1>

      <div className="row ">
        <div className="col"></div>
        <div className="col">
         
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
                    <th scope="col">feedbackId</th>
                    <th scope="col">foodQuality</th>
                    <th scope="col">deliveryService</th>
                    <th scope="col">orderAccuracy</th>
                    <th scope="col">overallExperience</th>
                    <th scope="col">comment</th>
                  </tr>
                </thead>
                <tbody>
                {employee.map((val, key) => {
                    return (
                        <tr key={key}>
                    <td>{val.feedbackId}</td>
                    <td>{val.foodQuality}</td>
                    <td>{val.deliveryService}</td>
                    <td>{val.orderAccuracy}</td>
                    <td>{val.overallExperience}</td>
                    <td>{val.comment}</td>

                  </tr>
                    )
                   })}
                </tbody>
              </table>
            </div>
          )}
          
          {/* <button
            onClick={getallfeedback}
            className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
          >
            GetallFeedback
          </button> */}
        </div>
        <div className="col"></div>
      </div>
   
    </div>
  );
};

export default GetFeedback;
