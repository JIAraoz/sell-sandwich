import { ProductCardProps} from "../types";

export default function ProductCard({product} : ProductCardProps ){
   

    
    return(
        <div>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <img src={`http://localhost:3000/${product.image}`} alt={product.name} />
        </div>
    )
}