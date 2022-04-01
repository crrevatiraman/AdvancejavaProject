

const Checkout = () =>{

    return (
        <div className='background-img example'>
            <h1 className="title">CheckOut</h1>
            <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Add Address</h2>
                <div className="mb-3">
                        <label htmlFor="" className="label-control">
                            Address line 1
                        </label>
                        <input 
                        
                        type="text"
                        className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label-control">
                            Address line 2
                        </label>
                        <input 
                        
                        type="text"
                        className="form-control"
                        
                        
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="label-control">
                            City
                        </label>
                        <input 
                        
                        type="text"
                        className="form-control"
                        
                        
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label-control">
                            State
                        </label>
                        <input 
                        
                        type="text"
                        className="form-control"
                        
                        
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label-control">
                            PinCode
                        </label>
                        <input 
                        
                        type="number"
                        className="form-control"
                        
                        
                        />
                    </div>
                    <button className="css-button-arrow--sky css-button-arrow--sky:hover css-button-arrow--sky:hover:after css-button-arrow--sky:afte">Add</button>
           
                </div>
                <div className="col">
                    <h3>Amount :</h3> 
                </div>
            </div>
            </div>
        </div>
    )
}

export default Checkout