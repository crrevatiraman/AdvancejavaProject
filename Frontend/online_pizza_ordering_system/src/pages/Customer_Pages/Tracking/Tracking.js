import './tracking.css'
import {useEffect, useState} from 'react'
import axios from "axios"
import { URL } from '../../../config'
const Tracking = () =>{
    const [statusType,setStatusType] = useState('');
    const [orderId,setOrderId] = useState(0);

    useEffect(()=>{
        getOrderStatus()
    },[])


    const getOrderStatus = () =>{
        const id = 14;
        // const url = `${URL}/order/get-orderstatus/${orderId}`;
        const url = `${URL}/order/get-orderstatus/${id}`;
        axios.get(url).then((response) => {
            // get the data from the response
            const result = response.data;
            console.log(result);
            if (result["status"] == "success") {
               
                console.log("success")
                setStatusType(result['data'])              
            } else {
              //toast.error(result["error"]);

            }
          });
  }


    return (
        <div className="container">
            <h1 className='track-color'>Track Delivery Status</h1>

            <div className="row" >
                <div className="col">
                    <div className="container-track">
                   <div className="row" >
                        <div className="col">
                        <img className="img-tracking" src="./images/tracking/placed.png" alt="" />
                        </div>
                        {statusType === "Placed" && (<div className="col">
                            <h4 className="container-text-selected track-color">Order Placed</h4>
                        </div>)}
                        
                        {statusType !== "Placed" && (<div className="col">
                            <h4 className="container-text track-color">Order Placed</h4>
                        </div>)}

                    </div>
                    <div className="row">
                        <div className="col">
                       
                        </div>

                        <div className="col">
                        <img className="img-tracking img-arrow" src="./images/tracking/downarrow.png" alt="" />
                        </div>
                    </div>
                 
                    <div className="row" >
                        <div className="col">
                        <img className="img-tracking" src="./images/tracking/confirm.png" alt="" />
                        </div>

                        <div className="col">
                    
                            {statusType === "Confirmed" && (<div className="col">
                            <h4 className="container-text-selected track-color">Order Confirmed</h4>
                        </div>)}
                        
                        {statusType !== "Confirmed" && (<div className="col">
                            <h4 className="container-text track-color">Order Confirmed</h4>
                        </div>)}

                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                       
                        </div>

                        <div className="col">
                        <img className="img-tracking img-arrow" src="./images/tracking/downarrow.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <img className="img-tracking" src="./images/tracking/preparation.png" alt="" />
                        </div>

                       
                        <div className="col">
    

                            {statusType === "Prepared" && (<div className="col">
                            <h4 className="container-text-selected track-color">Prepared</h4>
                        </div>)}
                        
                            {statusType !== "Prepared" && (<div className="col">
                                <h4 className="container-text track-color">Prepared</h4>
                            </div>)}

                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                       
                        </div>

                        <div className="col">
                        <img className="img-tracking img-arrow" src="./images/tracking/downarrow.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <img className="img-tracking" src="./images/tracking/delivery.png" alt="" />
                        </div>        
                        
                        <div className="col">
                        

                            {statusType === "Out For Delivery" && (<div className="col">
                            <h4 className="container-text-selected track-color">Out For Delivery</h4>
                        </div>)}
                        
                            {statusType !== "Out For Delivery" && (<div className="col">
                                <h4 className="container-text track-color">Out For Delivery</h4>
                            </div>)}

                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                       
                        </div>

                        <div className="col">
                        <img className="img-tracking img-arrow" src="./images/tracking/downarrow.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <img className="img-tracking" src="./images/tracking/complete.png" alt="" />
                        </div>

                    
                        <div className="col">
        

                            {statusType === "Delivered" && (<div className="col">
                            <h4 className="container-text-selected track-color">Complete</h4>
                        </div>)}
                        
                            {statusType !== "Delivered" && (<div className="col">
                                <h4 className="container-text track-color">Complete</h4>
                            </div>)}

                        </div>
                    </div>
                    </div>
                </div>
                <div className="col"></div>
                    <div className="col"></div>
            </div>
        </div>
    )
}

export default Tracking