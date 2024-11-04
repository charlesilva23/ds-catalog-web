'use client'

import { ICategoriesDTO, IProductsRecordDTO } from "@/utils/products"
import { useEffect, useState } from "react"
import { getCategories, getProducts } from "@/services/products.service"
import Card from "../components/cards/Cards"
import Image from "next/image"

export default function Catalogo() {
  const [products, setProducts] = useState<IProductsRecordDTO[]>([])
  const [categories, setCategories] = useState<ICategoriesDTO[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts()
        setProducts(response.content)
      } catch (error) {
        console.error('Erro:', error)
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await getCategories()
        console.log(response.content)
        setCategories(response.content)
      } catch (error) {
        console.error("erro:", error)
      }
    }


    fetchProducts()
    fetchCategories()
  }, [])

  return (
    <div className="flex justify-center h-screen w-screen">
      <div className="flex flex-wrap w-10/12 justify-center gap-6">
        <div className="p-8 w-11/12">
          <label htmlFor="catalogo" className="text-2xl">Catálogo de produtos</label>
          <div className="flex mt-4 w-full h-16 shadow-card border rounded-md items-center gap-6">
            <input type="text" placeholder="Nome do produto" className="ml-4 w-5/12 border-b-2 font-thin" />
            <select name="categoria" id="categoria" className="w-1/3 h-9 bg-white text-brand-gray border-b-2 font-thin">
              <option value="" disabled selected>Categoria</option>
              {categories?.map((categorie) => (
                <option value={categorie.id} key={categorie.id}>{categorie.name}</option>
              ))}
            </select>
            <button className="p-1 h-10 px-8 border border-brand-gray rounded-xl text-brand-gray text-sm text-nowrap">LIMPAR FILTRO</button>
          </div>
        </div>
        {products?.map((product) => (
          <Card variant="catalog" key={product.id}>
            <div className="w-full flex justify-center py-4">
              <Image src={product.imgUrl} alt={product.imgUrl} width={120} height={120} /><br />
            </div>
            <hr />
            <div className="flex px-4 mt-4">
              <h1>{product.name}</h1>
            </div>
            <div className="flex items-start justify-start px-4">
              <span className="text-xs text-brand-gray w-5 mt-1">R$</span>
              <label className="text-3xl text-brand-blue">{product.price}</label>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
