import axios from "axios";
import { ProductCardProps} from "../types";

export default function ProductCard({product} : ProductCardProps ){
    
    const handleDelete = async () => {
        try {
            await axios.delete(`https://sell-sandwich-2.onrender.com/products/deleteProduct/${product.id}`)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    } 

    
    return(
        <div className="flex flex-col justify-center align-middle bg-purple-500">
            <button className="border" onClick={handleDelete}>X</button>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <img src={`https://sell-sandwich-2.onrender.com/${product.image}`} alt={product.name} />
        </div>
    )
}