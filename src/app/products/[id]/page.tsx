'use client'

import Card from "@/components/Cards";
import { getProductById } from "@/services/products.service";
import { IProductsRecordDTO } from "@/utils/products";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const ProductDetails = () => {
  const [productById, setProductById] = useState<IProductsRecordDTO | null>(null)
  const { id } = useParams()
  useEffect(() => {

    const fetchProductsById = async () => {
      try {
        const response = await getProductById(Number(id))
        setProductById(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProductsById()
  }, [id])


  return (
    <div>
      <Card variant="mdCard" className="flex w-full h-full">
        <h1>{productById?.id}</h1>
        <h1>{productById?.name}</h1>
        <h1>{productById?.price}</h1>
      </Card>
    </div>
  )
}

export default ProductDetails