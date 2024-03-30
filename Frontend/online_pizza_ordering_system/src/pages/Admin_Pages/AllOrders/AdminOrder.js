import "./order.css";
import AOrder from "../../../components/Admin/AOrder";
import { Scrollbars } from "react-custom-scrollbars-2";
import { URL } from "../../../config";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../../../components/Footer/Footer";
import AdminOrderNav from "../../../components/Navbr/AdminNavbar/AdminOrderNav";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
 
  const [check, setCheck] = useState(true);

  useEffect(() => {
    console.log("in use effect");
    getAllOrders();
    
    console.log("in use effect");
  }, []);

  const getAllOrders = () => {
    const url = `${URL}/order/getall-orders`;
    axios.get(url).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        console.log("success");
        setOrders(result["data"]);
        setCheck(false);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  return (
    <div className="customerorder-bg">
      <AdminOrderNav 
      getAllOrders={getAllOrders} 
      
      />
      <div className="container" style={{marginTop : "70px"}}>
        <div className="row">
          <div className="col">
            
            {!check && <h1 style={{ color: "white" }}>All Orders</h1>}
          </div>
        </div>

        <div className="container-Aorder">
        
            <div className="row">
              <div className="col-3">
                <h4 style={{ color: "black" }}>Order</h4>
              </div>

              <div className="col">
                <h4 style={{ color: "black" }}>Customer</h4>
              </div>

              <div className="col">
                <h4 style={{ color: "black" }}>Address</h4>
              </div>


              <div className="col">
                <h4 style={{ color: "black" }}>Placed At</h4>
              </div>
            </div>
            <hr />
            <Scrollbars>
              <div >
            {orders.map((order) => {
              return (
                <AOrder
                  key={order.orderId}
                  order={order}
                  
                />
              );
            })}
            </div>
          </Scrollbars>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AdminOrder;
