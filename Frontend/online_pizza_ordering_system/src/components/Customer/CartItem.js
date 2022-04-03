import {useEffect,useState} from "react";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";

const CartItem = ({item , changeQuantity}) => {

  const [qty,setQty] = useState(item.quantity);

  // useEffect(()=>{
  //   console.log("in useeffect")
  // },[qty])


  
  const increment = () =>{
    console.log('increment count')
  
    const url = `${URL}/order/increment-quantity/${item.cartDetailId}`;

    axios.put(url).then((response) => {
        // get the data from the response
        const result = response.data;
  
        if (result["status"] == "success") {
            console.log('added to cart');
            //document.location.reload();
            setQty(qty+1)
            changeQuantity(qty)
            
        } else {
          toast.error(result["error"]);
        }
      });
      
  }



  const decrement = () =>{
    console.log('decrement count')
    setQty(qty-1)
    changeQuantity(qty)
    const url = `${URL}/order/decrement-quantity/${item.cartDetailId}`;

    axios.put(url).then((response) => {
        // get the data from the response
        const result = response.data;
  
        if (result["status"] == "success") {
            console.log('remove from cart');
            setQty(qty+1)
            changeQuantity(qty)
           
        } else {
          toast.error(result["error"]);
        }
      });
  }

  const removeItem = () =>{
    setQty(-1)
    changeQuantity(qty)
    console.log('remove count')
    const url = `${URL}/order/delete-item/${item.cartDetailId}`;

    axios.delete(url).then((response) => {
        // get the data from the response
        const result = response.data;
  
        if (result["status"] == "success") {
            console.log('deleted from cart');
           
        } else {
          toast.error(result["error"]);
        }
      });

  }




  return (
    <div>
         <div className="row mb-3">
            <div className="col-2">
              <img
                src={item.image}
                alt="pizza"
                className="img-size"
              />
            </div>
            
              {item.productName != null && (<div className="col-4">
              <h4 style={{ color: "black",marginTop:"20px" }}>{item.productName}</h4>
              <p style={{ color: "black" }}>({item.size})</p>
            </div>)}
            {item.comboName != null && (<div className="col-4">
              <h4 style={{ color: "black",marginTop:"20px" }}>{item.comboName}</h4>
              
            </div>)}
            <div className="col-4">
              <div className="row ">
                  <div className="col-2">
                    <img 
                    src="./images/incr.svg" 
                    alt=""
                    className="img-size-incr"
                    value="Increase"
                    onClick={increment}
                    />
                   
                  </div>
                  <div className="col-1">
                    
                    <input type="number"
                    className="qty-box"
                        disabled
                        value={item.quantity}
                    />
                  </div>
                  <div className="col-2">
                    <img 
                    src="./images/decr.svg" 
                    alt=""
                    className="img-size-decr"
                    onClick={decrement}
                    />
                  </div>
                  <div className="col-2">
                    <img 
                    src="./images/trash.svg" 
                    alt=""
                    className="img-size-decr trash"
                    onClick={removeItem}
                    />
                  </div>
            
              </div>

              
            </div>
            <div className="col-2">
              <h4 className="item-price">₹ {item.price}</h4>
            </div>   
          </div>
          <hr />
    </div>
  )
};

export default CartItem;
