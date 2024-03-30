
import * as React from 'react';
import { URL } from "../../config";
import { useNavigate } from 'react-router'
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";

const Item = ({item}) => {
    
    //const [price, setPrice] = useState('');
   
    const [subCategory,setSubCategory] = useState('');
    const navigate = useNavigate()

    // useEffect(() => {
    //     getProductDefaultPrice()
    //     // setProducts(product)
    //     populateProductSizes()
    //   }, [])

    //   const populateProductSizes= () =>{
       
    //     item.subCategoryList.map(sub => {
    //         if (sizes.indexOf(sub.size) === -1) {
    //             sizes.push(sub.size)
    //         }
    //     });
    // } 
    

    // const populateProductCrusts = (cr) =>{
       
    //     let array = []
    //     item.subCategoryList.map(sub => {
    //        if(sub.size === cr)
    //        {
    //            array.push(sub.crustType)
    //        }
    //     });
    //     setCrusts(array)
    // } 


    const editProduct = () => {
        navigate("/edit-product", {state:{product:item}})
    }
    const deleteProduct = () => {
        const url = `${URL}/product/delete-product/${item.productId}`;

        axios.delete(url).then((response)=>{
            const result = response.data
            if(result['status'] == 'success')
            {
                toast.success("product deleted.....")
                //navigate("/home")
                window.location = "/admin-home"
                
            }
            else
            {
                toast.error("error....")
            }
        })
        
        
    }

    const getProductDefaultPrice = ()=>{

        
        const url = `${URL}/product/get-defaultPrice/${item.productId}`;
        axios.get(url).then((response) => {
            // get the data from the response
            const result = response.data;
            console.log(result);
            if (result["status"] == "success") {
                setSubCategory(result['data'])
                //setPrice(result['data'].price)
                console.log(subCategory);

            } else {
              toast.error(result["error"]);
            }
          });

    }



    const getProductPrice = () =>{
        const url = `${URL}/product/get-ProductPrice`;
        const productId = item.productId;
        
        const body = {
            productId,
            // crustType,
            // size
        }
        console.log(body);
        axios.post(url,body).then((response)=>{
            const result = response.data
            console.log(result);
            setSubCategory(result['data'])
            console.log(result['data'].price);
        })
       
    }

    useEffect(() => {
     
        getProductPrice();
        console.log("Inside useEffect")
    }, [])

    useEffect(() => {
     
        getProductPrice();
        console.log("Inside useEffect")
    }, [])



    return (
        <div className="col-sm-6 col-md-5 col-lg-4 item">
            <div className="box">
                <img className="rounded img-fluid pizza-img" src={item.productImage} alt={item.productName}/>
                <h3 className="name">{item.productName}</h3>
                <p className="description">{item.description}</p>
                <div className='row'>
                    
                    <div className='col'>
                    <div className="mb-3">
                    
                
                </div>
                    </div>

                    <div className='col'>
                    <div className="mb-3">
                    

                     
                </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-around align-items-center">
                    <button onClick={() => editProduct(item)} className="btn btn-success" type="button">
                        Edit
                    </button>
                    <button onClick={() => deleteProduct(item)} className="btn btn-success" type="button">
                        Delete
                    </button>
                    
                    <span className="badge rounded-pill bg-danger price">₹{subCategory.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
