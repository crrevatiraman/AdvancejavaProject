import Item from "./Item";
import Combo from "./Combo";

const Menu = ({name, desc,check, menu}) => {

    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                {/* <div className="row justify-content-center features">
                    {menu.map((pizza) => (
                        <Item key={pizza.productId} item={pizza}/>
                    ))}
                </div> */}
                { check == 'product' && (
                <div className="row justify-content-center features">
                   
                        
                    {menu.map((pizza) => (
                        <Item key={pizza.productId} item={pizza}/>
                    ))}       
                </div>
                     )}

                {check == 'combo' && (
                 <div className="row justify-content-center features">
                    
                        
                    {menu.map((pizza) => (
                        <Combo key={pizza.comboId} item={pizza}/>
                    ))}
                </div> 
                )}
            </div>
        </section>
    );
};

export default Menu;
