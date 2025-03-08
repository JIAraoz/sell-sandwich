import { ProductCardProps} from "../types";

export default function ProductCard({product} : ProductCardProps ){
   

    
    return(
        <div>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <img src={`https://sell-sandwich-2.onrender.com/${product.image}`} alt={product.name} />
        </div>
    )
}