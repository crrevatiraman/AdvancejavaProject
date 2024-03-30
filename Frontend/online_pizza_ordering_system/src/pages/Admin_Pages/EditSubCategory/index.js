import {useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import AdminCommonNavb from "../../../components/Navbr/AdminNavbar/AdminCommonNavb"
import Footer from "../../../components/Footer/Footer";
import { URL } from "../../../config";

const EditSubCategory = () => {
  const {state} = useLocation()
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
 
  const [price , setPrice] = useState("")
  const [products,setProducts] = useState([])

  // used to navigate from one component to another
  const navigate = useNavigate();

  useEffect(() => {
    const { product } = state
    console.log(state)
    setProductName(product.productName)
    setProductId(product.productId)
    setPrice(product.price)
    setProducts(product)
  }, [])

  const addCategory = () => {
    const body = {
      productId,
      price,
      product:products
    };

    
    // url to call the api
    const url = `${URL}/product/edit-subcategory/${productId}`;

    // const id = 32;
    // const url = `${URL}/product/edit-subcategory/${id}`;

    // http method: post
    // body: contains the data to be sent to the API
    axios.put(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully updated sub category details");

        // navigate to the signin page
        navigate("/edit-subcategory");
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const cancelUpdateSubCategory = () => {
    navigate("/home");
  };



  return (
    <div className="background-img">
      <AdminCommonNavb/>
      <div style={{marginTop : "50px"}}>
      

      <div className="row">
        <div className="col"></div>
        <div className="col border-sub">
        <h1 className="title" style={{color:'white'}}>Edit Sub-Category</h1>
        <hr/>
          <div className="form">
            

          <div className="mb-3">
              <label htmlFor="" className="label-control">
                Product Name
              </label>
              <input
                value={productName}
                readOnly="true"
                className="form-control"
              />
            </div>


            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Price
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <button
                    onClick={addCategory}
                    className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
                  >
                    Update
                  </button>
                </div>
                <div className="col"></div>
                <div className="col">
                  <div className="col"></div>
                  <button
                    style={{backgroundColor: 'red'}}
                    onClick={cancelUpdateSubCategory}
                    className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:after"
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
      <Footer/>
    </div>
  );
};

export default EditSubCategory;
