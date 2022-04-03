import './order.css'
import AOrder from '../../../components/Admin/AOrder'
import { Scrollbars } from "react-custom-scrollbars-2";
import { URL } from "../../../config";
import { useState,useEffect } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const CustomerOrder = () =>{
    const [orders,setOrders] = useState([])
    const [deliveryBoy,setdeliveryBoy] = useState([])



    // useEffect(() => {
    //     console.log('in use effect')
    //     getAllOrders()
    //     // setProducts(product)
    //     getAllDeliveryBoy()
    //     console.log('in use effect')
    //   }, [])

    const getAllOrders = () =>{

            const url = `${URL}/order/getall-orders`;
            axios.get(url).then((response) => {
                // get the data from the response
                const result = response.data;
                console.log(result);
                if (result["status"] == "success") {
                   
                    console.log("success")
                    setOrders(result['data'])
    
                } else {
                  toast.error(result["error"]);
                }
              });

    }

    const getAllDeliveryBoy = () =>{

        const url = `${URL}/order/get-deliveryboy`;
        axios.get(url).then((response) => {
            // get the data from the response
            const result = response.data;
            console.log(result);
            if (result["status"] == "success") {
               
                console.log("success")
                setdeliveryBoy(result['data'])

            } else {
              toast.error(result["error"]);
            }
          });

}


    return (
        <div className="container-md">
            <h1 style={{color:"black"}}>Orders</h1>

        
            <div className="container-order">
            <Scrollbars>
                <div className="row">
                    <div className="col-3">
                    <h3 style={{color:"black"}}>Order</h3>
                    
                    </div>
                    
                    <div className="col">
                    <h3 style={{color:"black"}}>Customer</h3>
                    </div>
                    
                    <div className="col">
                    <h3 style={{color:"black"}}>Address</h3>
                    </div>
                    
                    <div className="col">
                    <h3 style={{color:"black"}}>Assign Delivery Boy</h3>
                    </div>
                    
                    <div className="col">
                    <h3 style={{color:"black"}}>Order status</h3>
                    </div>
                    
                    <div className="col">
                    <h3 style={{color:"black"}}>Placed At</h3>
                    </div>
                </div>
                <hr />
                
                {orders.map((order) => {
                return <AOrder key={order.orderId} order ={order} deliveryBoy={deliveryBoy} />;
              })}
                
                </Scrollbars>

                

            </div>
        </div>
    )
}
export default CustomerOrder