import ProductCard from "./ProductCard"
import { ProductProps,Product } from "../types"

export default function Products({products} : ProductProps ){

    return(
     <div className="products h-10 ">

     {
          products.map((product : Product)=>{
             return(
                 <ProductCard key={product.id} product={product}/>
                )
            }) 
        }
        </div>
   
    )
}