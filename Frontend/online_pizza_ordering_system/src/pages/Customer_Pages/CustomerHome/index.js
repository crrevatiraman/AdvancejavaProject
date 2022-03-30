import CHeader from "../../../components/Customer/CHeader";
import CMenu from "../../../components/Customer/CMenu";
import "../../../assets/css/styles.css";
import "../../../assets/css/box.css";
import { URL } from "../../../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CustomerHome = () => {
  const [vegProductList, setVegProductList] = useState([]);
  const [nonVegProductList, setNonVegProductList] = useState([]);
  const [comboList, setComboList] = useState([]);

  useEffect(() => {
    getAllVegProduct();
    getAllNonVegProduct();
    getAllCombo();
  }, []);

  const getAllVegProduct = () => {
    const url = `${URL}/product/getall-vegproducts`;

    axios.get(url).then((response) => {
      const result = response.data;

      if (result["status"] == "success") {
        //toast.success("Successful");
        setVegProductList(result["data"]);
        console.log(response.data);
        
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const getAllNonVegProduct = () => {
    const url = `${URL}/product/getall-nonvegproducts`;

    axios.get(url).then((response) => {
      const result = response.data;

      if (result["status"] == "success") {
        //toast.success("Successful");
        setNonVegProductList(result["data"]);
        console.log(response.data);
        
      } else {
        toast.error(result["error"]);
      }
    });
  };


  const getAllCombo = () => {
    const url = `${URL}/product/getall-combo`;

    axios.get(url).then((response) => {
      const result = response.data;

      if (result["status"] == "success") {
        //toast.success("Successful");
        setComboList(result["data"]);
        console.log(response.data);
        
      } else {
        toast.error(result["error"]);
      }
    });
  };


  return (
    <div>
      {/* <h1 className="title" style={{color:"black"}}>Home</h1>  */}
      <CHeader name="City Pizzeria" />
      <CMenu
        name="Veg"
        desc="Tasty pizzas made with fresh ingredients"
        check = "product"
        menu={vegProductList}
      />
      <CMenu
        name="Non-Veg"
        desc="Tasty pizzas made with fresh ingredients"
        menu={nonVegProductList}
        check = "product"
      />
      <CMenu
        name="Combo"
        desc="Tasty pizzas made with fresh ingredients"
        check='combo'
        menu={comboList}
      />
    </div>
  );
};

export default CustomerHome;
