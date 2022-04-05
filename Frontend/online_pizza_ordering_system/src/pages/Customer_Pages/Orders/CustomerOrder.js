import './order.css'
import COrder from '../../../components/Customer/COrder'
import { Scrollbars } from "react-custom-scrollbars-2";
import { URL } from "../../../config";
import { useState,useEffect } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const CustomerOrder = () =>{
    const [orders,setOrders] = useState([])
    const [check,setCheck] =useState(true)



    useEffect(() => {
        console.log('in use effect')
        //getAllCustomerOrders()
        getCustomerPendingOrders()

      }, [])

    const getAllCustomerOrders = () =>{

            const url = `${URL}/order/getall-custorders/${sessionStorage['userId']}`;
            axios.get(url).then((response) => {
                // get the data from the response
                const result = response.data;
                console.log(result);
                if (result["status"] == "success") {
                   
                    console.log("success")
                    setOrders(result['data'])
                    setCheck(false)
    
                } else {
                  toast.error(result["error"]);
                  setCheck(false)
                }
              });

    }

    const getCustomerPendingOrders = () =>{

      const url = `${URL}/order/getcustomer-pendingorders/${sessionStorage['userId']}`;
      axios.get(url).then((response) => {
          // get the data from the response
          const result = response.data;
          console.log(result);
          if (result["status"] == "success") {
             
              console.log("success")
              setOrders(result['data'])
              setCheck(true)
          } else {
            //toast.error(result["error"]);
            setOrders([])
            setCheck(true)
          }
        });

}

    


    return (
        <div className="container-md">
            <h1 style={{color:"black"}}>Orders</h1>

            <div className='row'>
            <div className='col'>
            {check && (<h1 style={{color:"black"}}>Active Orders</h1>)}
        {!check && (<h1 style={{color:"black"}}>All Orders</h1>)}
            </div>
            <div className='col mt-3'>
              <button 
              onClick={getAllCustomerOrders}
              className='btn btn-warning'>All Orders</button>
            </div>
            <div 
            onClick={getCustomerPendingOrders}
            className='col mt-3'>
              <button className='btn btn-warning'>Active Orders</button>
            </div>
          </div>
        
            <div className="container-order">
            <Scrollbars>
                <div className="row">
                    <div className="col-3">
                    <h3 style={{color:"black"}}>Order</h3>
                    
                    </div>

                    <div className="col">
                    <h3 style={{color:"black"}}>Name</h3>
                    </div>

                    <div className="col">
                    <h3 style={{color:"black"}}>Address</h3>
                    </div>
               
                    
                    <div className="col">
                    <h3 style={{color:"black"}}>Time</h3>
                    </div>
                    <div className="col">
                    <h3 style={{color:"black"}}>Feedback</h3>
                    </div>
                </div>
                <hr />
                
                {orders.map((order) => {
                return <COrder key={order.orderId} order ={order} />;
              })}
                
                </Scrollbars>

                

            </div>
        </div>
    )
}
export default CustomerOrder