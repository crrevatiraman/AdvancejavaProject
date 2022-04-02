import '../../../assets/css/cart.css'
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";


const CartItem = () => {
    // const [ cart,setCart] = useState('');

  //   useEffect(() => {    
  //     getCartItems()
  //   }, [])

  // const getCartItems = () => {

  //     const url = `${URL}/order/getallcartitem/${sessionStorage['userId']}`;

  //     axios.get(url).then((response) => {
  //         // get the data from the response
  //         const result = response.data;
  //         console.log(result);
  //         if (result["status"] == "success") {
  //             setCart(result['data'])
  //             console.log(cart);
  //         } else {
  //           toast.error(result["error"]);
  //         }
  //       });

  // }


  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default CartItem;
