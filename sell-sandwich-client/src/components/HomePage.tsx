const URL_SERVER = import.meta.env.VITE_SERVER_URL

import { useState, useEffect } from "react";
import Form from "./Form";
import Products from "./Products";
import axios from "axios"
export default function HomePage(){
  const [products,setProducts] = useState([])
  useEffect(()=>{
    axios.get(`${URL_SERVER}/products/getProducts?t=${Date.now()}`).then((response) => {
      const product = response.data.products
      console.log(response.data.products);
      
       return setProducts(product)
     }).catch((error) =>{
       console.log(error);
       
     })
  },[])
  return(
    <><div className="flex flex-col align-middle items-center">
    <Form></Form>
    <Products products={products}></Products>
    </div>
    </>
  )
}