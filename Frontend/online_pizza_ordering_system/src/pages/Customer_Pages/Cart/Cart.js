
import Items from "./Items";
import { Scrollbars } from "react-custom-scrollbars-2";


const Cart = () => {
  const [ cart,setCart] = useState('');


  useEffect(() => {    
    getCartItems()
  }, [])

const getCartItems = () => {

    const url = `${URL}/order/getallcartitem/${sessionStorage['userId']}`;

    axios.get(url).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
            setCart(result['data'])
            console.log(cart);
        } else {
          toast.error(result["error"]);
        }
      });

}
  // cosumer
 // const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  {
    if (cart.length === 0) {
      return (
        <>
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{cart.quantity} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1>Empty Cart</h1>
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                card total: <span> {totalAmount}₹ </span>
              </h3>
              <button>CheckOut</button>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </section>
        </>
      );
    }
  }
};

export default Cart;
