'use client'

import Card from "@/components/Cards";
import { getProductById } from "@/services/products.service";
import { IProductsRecordDTO } from "@/utils/products";
import { useEffect, useState } from "react";


interface ProductDetailsProps {
  product: IProductsRecordDTO
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [productById, setProductById] = useState<IProductsRecordDTO | null>(null)

  useEffect(() => {
    console.log("produto", product)
    const fetchProductsById = async () => {
      try {
        const response = await getProductById(product.id)
        console.log(response)
        setProductById(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProductsById()
  }, [product])


  return (
    <div>
      <Card variant="mdCard" className="flex w-full h-full">
        <h1>{product?.id}</h1>
        <h1>{product?.name}</h1>
        <h1>{product?.price}</h1>
      </Card>
    </div>
  )
}

export default ProductDetails