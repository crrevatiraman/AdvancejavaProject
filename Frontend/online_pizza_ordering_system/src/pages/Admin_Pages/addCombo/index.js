import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import "./index.css";
import { URL } from "../../../config";





const Addcombo= () => {
  const [comboName, setComboName] = useState("");
  const [comboImage, setComboImage] = useState("");
  const [comboPrice, setComboPrice] = useState("");
  const [description, setDescription] = useState("");
  const [comboCategory, setComboCategory] = useState("");
  

  // used to navigate from one component to another
  const navigate = useNavigate();

  const cancelAddProduct = () => {
    navigate("/home");
  };
  const addtheCombo = () => {
    const body = {
      comboName,
      //comboImage,
      comboPrice,
      description,
      comboCategory
     
    };

    // url to call the api
    const url = `${URL}/user/add-combo`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.post(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully added combo");

        // navigate to the signin page
        navigate("/home");
      } else {
        toast.error(result["error"]);
      }
    });
  };



  return (
    <div className="background-img example">
      <h1 className="title">Add Combo</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col border2">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Combo Name
              </label>
              <input
                onChange={(e) => {
                  setComboName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Combo Image</label>
              <input
                onChange={(e) => {
                  setComboImage(e.target.files[0]);
                }}
                accept="image/*"
                type="file"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Combo Price
              </label>
              <input
                onChange={(e) => {
                  setComboPrice(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className="form">
                <label htmlFor="" className="label-control">
                  Combo Category
                </label>
              </div>
              <select  type="radio"
                className="form-select"
                onChange={(e) => {
                  setComboCategory(e.target.value);
                }}
              >
                <option className="text-dark" value="Veg">Veg</option>
                <option className="text-dark" value="NonVeg">Non-Veg</option>
               
              </select>
            </div>



            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Description
              </label>
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type=""
                className="form-control"
              />
            </div>

            <div>
                <div className="row">
                  <div className="col"> <button
                onClick={addtheCombo}
                className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
              >
                Add Combo
              </button>
</div>
                  <div className="col"></div>
                  <div className="col">
                  <button
                onClick={cancelAddProduct}
                className="css-button-arrow--sky1 css-button-arrow--sky1:hover css-button-arrow--sky1:hover:after css-button-arrow--sky1:after"
              >
                Cancel
              </button>
                  </div>
                  </div> 
             
             
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Addcombo;
