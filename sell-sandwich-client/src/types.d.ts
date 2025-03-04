export interface Product {
    id:string
    name:string
    price:number
    image:string
}

export interface ProductProps {
    products : Product[]
}

interface ProductCardProps {
    product: Product;
  }