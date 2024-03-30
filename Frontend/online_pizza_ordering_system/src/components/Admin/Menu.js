import Item from "./Item";

const Menu = ({name, desc,check, menu}) => {

    return (
        <section className="features-boxed">
            <div className="container">
                <div id = {name} className="intro">
                    <h2 className="text-center" style={{border : "3px solid", width : "60%", paddingBottom : "10px", borderRadius : "20px", backgroundColor : "black"}}>{name}</h2>
                </div>
               
                { check == 'product' && (
                <div className="row justify-content-center features">
                   
                        
                    {menu.map((pizza) => (
                        <Item key={pizza.productId} item={pizza}/>
                    ))}       
                </div>
                     )}
            </div>
        </section>
    );
};

export default Menu;
