import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import "./index.css";
import { URL } from "../../../config";

const Addproduct = () => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price , setPrice] = useState([])

  // used to navigate from one component to another
  const navigate = useNavigate();

  const cancelAddProduct = () => {
    navigate("/home");
  };

  const addtheProduct = () => {
    const body = {
      productName,
      productImage,
      category,
      description,
    };

    // url to call the api
    const url = `${URL}/user/add-product`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.post(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully added product");

        // navigate to the signin page
        navigate("/home");
      } else {
        toast.error(result["error"]);
      }
    });
  };

  // url to call the api
  // url to call the api
  // url to call the api

  return (
    <div className="background-img example">
      <h1 className="title">Add Product</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Product Name
              </label>
              <input
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Product Image</label>
              <input
                onChange={(e) => {
                  setProductImage(e.target.files[0]);
                }}
                accept="image/*"
                type="file"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className="form">
                <label htmlFor="" className="label-control">
                  Product Category
                </label>
              </div>
              <select
                type="radio"
                class="form-select"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option class="text-dark" value="Veg">
                  Veg
                </option>
                <option class="text-dark" value="NonVeg">
                  Non-Veg
                </option>
              </select>
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="" className="label-control">
                  Pizza Price:
                </label>
              </div>
              <label htmlFor="" className="label-control">
                Regular
              </label>
  
              <div className="row">
                <div className="col">
                  <label for="ex1">New Hand Tossed</label>
                  <input 
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                   className="form-control inputbox-size"
                    type="number" 
                    />
                  </div>
     
                <div className="col">
                <label for="ex1">Cheese Burst</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
                <div className="col">
                <label for="ex1">Wheat Crust</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
                <div className="col">
                <label for="ex1">Classic Hand Tossed</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
              </div>
             
              <label htmlFor="" className="label-control">
                Medium
              </label>
              <div className="row">
                <div className="col">
                  <label for="ex1">New Hand Tossed</label>
                  <input className="form-control inputbox-size" type="number" />
                  </div>
     
                <div className="col">
                <label for="ex1">Cheese Burst</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
                <div className="col">
                <label for="ex1">Wheat Crust</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
                <div className="col">
                <label for="ex1">Classic Hand Tossed</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
              </div>
             
              <label htmlFor="" className="label-control">
                Large
              </label>

              <div className="row">
                <div className="col">
                  <label for="ex1">New Hand Tossed</label>
                  <input className="form-control inputbox-size" type="number" />
                  </div>
     
                <div className="col">
                <label for="ex1">Cheese Burst</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
                <div className="col">
                <label for="ex1">Wheat Crust</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
                <div className="col">
                <label for="ex1">Classic Hand Tossed</label>
                  <input className="form-control inputbox-size" type="number" />
                </div>
              </div>
             
              
              
            </div>

            
            
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Description
              </label>

              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                className="form-control"
                cols="40"
                rows="5"
              ></textarea>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <button
                    onClick={addtheProduct}
                    className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
                  >
                    Add Product
                  </button>
                </div>
                <div className="col"></div>
                <div className="col">
                  <div className="col"></div>
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

export default Addproduct;
