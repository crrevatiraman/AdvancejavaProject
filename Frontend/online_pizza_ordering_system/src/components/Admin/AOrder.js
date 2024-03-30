
import moment from "moment-timezone";

const AOrder = ({order}) =>{
  
    

    return (
        <div style={{marginBottom:"50px"}}>
        <div className="row">
            <div className="col-3">
                <div className="row">
                    <h5 style={{color:"black"}}>Order Id:- {order.orderId}</h5>
                </div>
                <div className="row">

                    {order.orderDetailList.map((orderDetail) => {
                        if(orderDetail.product !== null){ return <p style={{color:"black",marginBottom:"5px"}} key={orderDetail.orderDetailId} >- {orderDetail.product.productName} - {orderDetail.quantity} qty.</p>;}
                        else{}
                return <p style={{color:"black"}} key={orderDetail.orderDetailId} >-  {orderDetail.quantity} qty.</p>;             
              })}


                </div>
            </div>
        
        <div className="col">
        <h5 style={{color:"black"}}>{order.user.firstName} {order.user.lastName} </h5>

        </div>
        
            <div className="col">
            <h5 style={{color:"black"}}>{order.user.address.city}</h5>
            </div>
            
            
            <div className="col">
            <h5 style={{color:"black"}}>
            {moment(order.orderDateTime).format('MM/DD/YYYY h:mm a')}
            </h5>
            </div>

        </div> 
        <hr/>
    </div>
    )
}

export default AOrder