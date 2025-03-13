'use client'

import BackButton from "@/components/BackButton";
import Card from "@/components/Cards";
import Image from "next/image";
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
    <>
      <div className="flex justify-center w-3/12">
        <BackButton />
      </div>
      <div className="flex justify-center p-6">
        <Card variant="home">
          <div className="flex flex-row gap-6 p-10">
            {productById?.imgUrl && (
              <Image
                className="border border-gray-300 rounded-md"
                src={productById.imgUrl}
                alt={productById.imgUrl || "Product"}
                width={400}
                height={100}
              />
            )}
            <div className="flex w-4/6">
              <div className="flex flex-col p-10 items-start border border-gray-300 rounded-md">
                <h1 className="text-gray-400 font-bold">Descrição do produto</h1>
                <h3 className="text-sm text-gray-400">{productById?.description}</h3>
              </div>
            </div>
          </div>
          <div className="ml-10">
            <h1 className="text-3xl">{productById?.name}</h1>
            <div className="flex items-start justify-start">
              <span className="text-md text-brand-gray w-7">R$</span>
              <label className="text-3xl text-brand-blue">{productById?.price}</label>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default ProductDetails


