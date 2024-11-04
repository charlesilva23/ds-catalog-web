'use client'

import { IProductsRecordDTO, IProductsResponseDTO } from "@/utils/products"
import { useEffect, useState } from "react"
import { getProducts } from "@/services/products.service"
import Card from "../components/cards/Cards"

export default function Catalogo() {
  const [products, setProducts] = useState<IProductsRecordDTO[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts()
        setProducts(response.content)
        console.log(response.content)
        // const response = await axios.get("/api/products")
        // setProducts(response.data.content)
        // console.log(response.data.content)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    fetchProducts()
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
              <option value="1">teste</option>
              <option value="2">teste</option>
            </select>
            <button className="p-1 h-10 px-8 border border-brand-gray rounded-xl text-brand-gray text-sm text-nowrap">LIMPAR FILTRO</button>
          </div>
        </div>
        {products?.map((product) => (
          <Card variant="catalog" key={product.id}>
            <h1>{product.name}</h1>
            <p>Preço: {product.price}</p>
          </Card>
        ))}

      </div>
    </div>
  )
}
{/* <Card variant="catalog">

        </Card>
        <Card variant="catalog">

        </Card>
        <Card variant="catalog">

        </Card>
        <Card variant="catalog">

        </Card>
        <Card variant="catalog">

        </Card>
        <Card variant="catalog">

        </Card> */}


{/* <div className="flex justify-center h-screen">
      <div className="flex flex-wrap w-full items-start justify-center py-10"> */}


{/* <ul>
        {products?.map((data) => (
          <li key={data.id}>
            Nome: {data.name}<br />
            Preço: {data.price}<br />
          </li>
        ))}
      </ul> */}
