import CItem from "./CItem";


const CMenu = ({name, check, menu}) => {

    return (
        <section >
            <div className="container" >
                <div id = {name} className="intro" >
                    
                    <h2  className="text-center " style={{border : "3px solid", width : "70%", paddingBottom : "10px", borderRadius : "20px", backgroundColor : "black", marginRight:'200px'}} >{name}</h2>
                </div> 
                    { check == 'product' && (
                    <div className="row justify-content-center features" >   
                        {menu.map((pizza) => (
                            <CItem key={pizza.productId} item={pizza}/>
                        ))}       
                    </div>)}

                {/* {check == 'combo' && (
                 <div className="row justify-content-center features">   
                    {menu.map((pizza) => (
                        <CCombo key={pizza.comboId} item={pizza}/>
                    ))}
                </div> 
                )} */}
            </div>
        </section>
    );
};

export default CMenu;
