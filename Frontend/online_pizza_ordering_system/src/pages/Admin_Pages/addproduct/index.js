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
  

  // used to navigate from one component to another
  const navigate = useNavigate();

  const cancelAddProduct = () => {
    navigate("/admin-home");
  };

  
  const addtheProduct = () => {

    if (productName.length == 0) {
      toast.warning("Please enter product name");
    }
     else if (category.length == 0) {
      toast.warning("Please enter category");
    }
    else if (description.length == 0) {
      toast.warning("Please enter description");
    }    
      else if (productImage.length == 0) {
        toast.warning("Please enter image url");
      }
      else{
        const data = new FormData()
        data.append('productName', productName)
      data.append('category',category )
      data.append('description',description )
      data.append('productImage',productImage )

    

    // url to call the api
    const url = `${URL}/product/add-product`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.post(url, data).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully added product");
        
        console.log(result['data'])
        // navigate to the signin page
       navigate("/add-subcategory",{
        state: { product: result['data'] },
      })
     
         
      } else {
        toast.error(result["error"]);
      }
    });
  };

}
 

  return (
    <div className="background-img example">
      <h1 className="title">Add Product</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col border2">
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
              <label htmlFor="">Image URL</label>
              <input
                onChange={(e) => {
                  setProductImage(e.target.value);
                }}
                
                type="text"
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
                <option className="text-dark" selected> Select Category </option>
                <option class="text-dark" value="Veg">
                  Veg
                </option>
                <option class="text-dark" value="NonVeg">
                  Non-Veg
                </option>
              </select>
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

export default Addproduct
