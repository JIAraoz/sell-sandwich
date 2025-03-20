

import { useState, useEffect } from "react";
import Products from "./Products"; 
import axios from "axios"
export default function HomePage(){
  const [products,setProducts] = useState([])
  useEffect(()=>{
    axios.get(`https://sell-sandwich-2.onrender.com/products/getProducts?t=${Date.now()}`).then((response) => {
      const product = response.data.products
      console.log(response.data.products);
      
       return setProducts(product)
     }).catch((error) =>{
       console.log(error);
       
     }) 
  },[])
  return(
    <><div className="flex flex-col align-middle items-center bg-black h-4/5 m-8  ">
    {
       products[0] ? <Products products={products}></Products> : <span className="mt-6">No hay productos</span>   

    }
    </div>
    </>
  )
} 